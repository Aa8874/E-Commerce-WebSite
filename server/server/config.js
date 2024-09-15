const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    const { amount, token } = req.body;
    
    try {
        const payment = await stripe.charges.create({
            amount: amount * 100,  // Stripe expects amounts in cents
            currency: 'usd',
            source: token.id,
            description: 'E-commerce transaction'
        });

        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};