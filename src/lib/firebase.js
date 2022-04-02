import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// here is where I want to call the seed file (only ONCE!)
import { seedDatabase } from "seed";

const config = {
  apiKey: "AIzaSyBT5YSsWWPetKuzRP5aos98soJ8uYbJqzE",
  authDomain: "popup-pano2vr.firebaseapp.com",
  projectId: "popup-pano2vr",
  storageBucket: "popup-pano2vr.appspot.com",
  messagingSenderId: "600721415783",
  appId: "1:600721415783:web:7cc69b7761f4fdb7f97ec2",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
