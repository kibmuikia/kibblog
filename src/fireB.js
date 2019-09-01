import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Initialize Firebase
/*var config = {
	apiKey: "",
	authDomain: "kibblog-f8bac.firebaseapp.com",
	databaseURL: "https://kibblog-f8bac.firebaseio.com",
	projectId: "kibblog-f8bac",
	storageBucket: "kibblog-f8bac.appspot.com",
	messagingSenderId: "1068272704758"
};
firebase.initializeApp(config);*/

var config = {
	apiKey: "",
	authDomain: "kibblog-f8bac.firebaseapp.com",
	databaseURL: "https://kibblog-f8bac.firebaseio.com",
	projectId: "kibblog-f8bac",
	storageBucket: "kibblog-f8bac.appspot.com",
	messagingSenderId: "1068272704758"
};
firebase.initializeApp(config);

const dbKibblog = firebase.firestore();

const storage = firebase.storage();
const storageRef = storage.ref();
const imagesRef = storageRef.child('images');
const profilePhotosRef = imagesRef.child('profilephotos');

//dbKibblog.settings( { timestampsInSnapshots: true } );

export { dbKibblog, profilePhotosRef };// default
