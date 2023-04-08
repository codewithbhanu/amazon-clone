const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51Hi0faEtfix0HF1jwguMI1OWhxJ99mncjgtcUb2ziBhHnDfEeNmjd2cl7fNdmq1uO5QX51L01w8tQ1GkJWp0KNcc00lddzXR6G')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency : 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)