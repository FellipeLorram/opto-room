import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_CONNECTION as string);
  }
  return stripePromise;
};

export default initializeStripe;