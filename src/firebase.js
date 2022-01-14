import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDodRVmBYOnXDAMHqsnLMSzS7UQvl-Rzbw",
  authDomain: "profile-picture-a18c1.firebaseapp.com",
  projectId: "profile-picture-a18c1",
  storageBucket: "profile-picture-a18c1.appspot.com",
  messagingSenderId: "329378222938",
  appId: "1:329378222938:web:e958252c1b42e81e995963"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
