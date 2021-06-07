import firebase from 'firebase/app';

// Optionally import the services that you want to use
import 'firebase/auth';
//import "firebase/database";
import 'firebase/firestore';
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
	apiKey: 'AIzaSyDNIN14h5VMzKcLpB6ZBacsK3Hg0gI_gyY',
	authDomain: 'litgrade-438d6.firebaseapp.com',
	projectId: 'litgrade-438d6',
	storageBucket: 'litgrade-438d6.appspot.com',
	messagingSenderId: '364505165757',
	appId: '1:364505165757:web:cd3dd1121e44f7f6e06cd4',
	measurementId: 'G-GFQFGZ2CTL',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
