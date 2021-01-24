import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBjU8cCKeCvJtCSR3L4R0pmj7oQP4bnukw",
	authDomain: "clone-a29e0.firebaseapp.com",
	databaseURL: "https://clone-a29e0.firebaseio.com",
	projectId: "clone-a29e0",
	storageBucket: "clone-a29e0.appspot.com",
	messagingSenderId: "245528365836",
	appId: "1:245528365836:web:1f2004763c6da73231d729",
	measurementId: "G-PLCBVZKT70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
