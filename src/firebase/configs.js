// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/analytics'
import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyA5xRAj9pEZ-sRz_7Jqd3JK63TaaDEwRLI",
  authDomain: "fir-2dbf5.firebaseapp.com",
  projectId: "fir-2dbf5",
  storageBucket: "fir-2dbf5.appspot.com",
  messagingSenderId: "554812352463",
  appId: "1:554812352463:web:3f30cad7f9b56a961d14ba",
  measurementId: "G-MZNYQTQBRV"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const app=initializeApp(firebaseConfig);
export const authentication=getAuth(app);
// const auth=firebase.auth();
// const db=firebase.firestore();
// export {auth,db};
// export default firebase;