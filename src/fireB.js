import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD8oFzWPzvfit-7T5VgswK1GdMU9QG8JEU",
	authDomain: "kibblog-f8bac.firebaseapp.com",
	databaseURL: "https://kibblog-f8bac.firebaseio.com",
	projectId: "kibblog-f8bac",
	storageBucket: "kibblog-f8bac.appspot.com",
	messagingSenderId: "1068272704758"
};
firebase.initializeApp(config);

const dbKibblog = firebase.firestore();

dbKibblog.settings( { timestampsInSnapshots: true } );

export default dbKibblog;