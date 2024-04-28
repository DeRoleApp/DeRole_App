import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwfAvz7KMNiZK7DagSBIUF6-ACPiyzASI",
  authDomain: "de-role-63ac9.firebaseapp.com",
  projectId: "de-role-63ac9",
  storageBucket: "de-role-63ac9.appspot.com",
  messagingSenderId: "241791855463",
  appId: "1:241791855463:web:d713b46460a936e87e5dc2"
};

const app = initializeApp(firebaseConfig);
export const firestore = () => getFirestore(app);
