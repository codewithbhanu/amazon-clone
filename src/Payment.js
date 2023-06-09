import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import userEvent from '@testing-library/user-event'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements(); 

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await Axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });

            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

        console.log('The secret Key is:', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ PaymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')
        }) 
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message: '')
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1 >
                    checkout {<Link to='/checkout'>{basket?.length} items</Link>}
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3 >Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p >{user?.email}</p>
                        <p >5F2 React Lane</p>
                        <p >California</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3 >Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3 >Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                        <h3 >Order Total : {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} 
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span >
                                        {processing ? <p>processing</p> : 'Buy Now'}
                                    </span>
                                </button>
                            </div>
                            {error && <div >{error}</div>}
                        </form> 
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Payment
