import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container' >
                    <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="" />
                    <div className='home__row' >
                    <Product id='12' title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                     price= {20.22} image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                     rating={3}
                    />

                    <Product id='23' title='Playstation 5'
                    price= {800.99} image='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/r0geunekeykk2rzeltnj.jpg'
                     rating={4}
                    />
                    
                </div>
                
                <div className='home__row' >
                    <Product id='34' title='HP Omen Gaming Laptop'
                    price= {1100.88} image='https://assets.hardwarezone.com/img/2017/08/HPOmenX_X.png'
                     rating={4}
                    />

                    <Product id='45' title='Amazon Alexa Dot'
                    price= {400.88} image='https://atlas-content-cdn.pixelsquid.com/stock-images/amazon-echo-dot-smart-speaker-WyXA8Q9-600.jpg'
                     rating={4}
                    />

                    <Product id='56' title='Apple Iphone 12 Pro'
                    price= {1300.99} image='https://i.ytimg.com/vi/O5lfECOx-R0/maxresdefault.jpg'
                     rating={5}
                    />
                </div>
                
                <div className='home__row' >
                <Product id='45' title='Amazon Alexa Dot'
                    price= {400.88} image='https://static.toiimg.com/photo/msid-75862972/75862972.jpg?resizemode=4&width=400'
                     rating={4}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Home
