import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { environment } from "./environment";

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: environment.FB_API_KEY,
  authDomain: environment.FB_AUTH_DOMAIN,
  projectId: environment.FB_PROJECT_ID,
  storageBucket: environment.FB_STORAGE_BUCKET,
  messagingSenderId: environment.FB_MESSAGING_SENDER_ID,
  appId: environment.FB_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

