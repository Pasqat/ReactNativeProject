import createStripe from "stripe-client";

import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51GtVGoFI4U1iDyMeB6Ufiuq3Wi5egTb2AVe8h8FWp71uUhozfnglGJzfdrivz39PdXoJHpqXL93owvIUVkAOiltg00MRIn3pw7"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong precessing your data");
    }

    return res.json;
  });
};
