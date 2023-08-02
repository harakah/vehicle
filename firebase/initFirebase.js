import { initializeApp, getApp } from 'firebase/app';
import { getStorage, ref, uploadString, getMetadata, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as refDB, set as setDB } from "firebase/database";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_DATABASE_URL
} from 'lib/constant';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
  databaseURL: FIREBASE_DATABASE_URL
};

let app;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(firebaseConfig);
}

// Get a reference to the storage service
const storage = getStorage(app);

// Get a reference to the analytics service
// const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);

// export
export {
  app as default, 
  storage,
  database,
  ref,
  uploadString,
  refDB,
  setDB,
  getMetadata,
  getDownloadURL
};
