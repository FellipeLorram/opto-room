import '../firebase/config/firebaseClient';
import { getFirestore, addDoc, collection, doc, onSnapshot, } from 'firebase/firestore';
import initializeStripe from './initializeStripe';

const database = getFirestore();

const createCheckoutSession = async (uid: string, key: string) => {

  const docRef = collection(database, 'users', uid, 'checkout_sessions');
  const { path } = await addDoc(docRef, {
    price: key,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });


  onSnapshot(doc(database, path), async (snap) => {
    const { sessionId } = snap.data() || { sessionId: '' };
    if (sessionId) {
      const stripe = await initializeStripe();
      if (stripe) stripe.redirectToCheckout({ sessionId });
    }
  });
}


export default createCheckoutSession;
