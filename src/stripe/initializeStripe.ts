import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe('pk_test_51KQwZYEqE8aFGmq4XQ8EbHK9BpBkNeFLzXYwnng4E2OtIb5HKYMRqOUY1xxzqABqPShEejqbebQUBkzOUdHbRiW800JYU8hKAf');
  }
  return stripePromise;
};

export default initializeStripe;