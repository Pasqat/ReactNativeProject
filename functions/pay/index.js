module.exports.payRequest = (req, res, stripeClient) => {
  const body = JSON.parse(req.body);
  const { token, amount } = body;

  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      res.json(paymentIntent);
    })
    .catch((e) => {
      res.status(400);
      res.send(e);
    });
};
