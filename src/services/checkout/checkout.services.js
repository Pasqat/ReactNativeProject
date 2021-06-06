import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51GtVGoFI4U1iDyMeB6Ufiuq3Wi5egTb2AVe8h8FWp71uUhozfnglGJzfdrivz39PdXoJHpqXL93owvIUVkAOiltg00MRIn3pw7"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
