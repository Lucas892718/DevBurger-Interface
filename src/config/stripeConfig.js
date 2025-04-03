import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51R3pdF04xBtX5FUswjqa4kIiddusk5z6WiSGuUChBSYFRyE13nn91FBu5ThONHZ8WVRxI7B6CsCVbdO4vUeRNzu800RgGVpE2h',
);

export default stripePromise;
