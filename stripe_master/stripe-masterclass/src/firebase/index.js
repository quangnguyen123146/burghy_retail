import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDyZi9UpYp3-dre00aXOL_it9pjJszDIwU",
    authDomain: "e-commerce-1fe85.firebaseapp.com",
    databaseURL: "https://e-commerce-1fe85-default-rtdb.firebaseio.com",
    projectId: "e-commerce-1fe85",
    storageBucket: "e-commerce-1fe85.appspot.com",
    messagingSenderId: "656856534046",
    appId: "1:656856534046:web:97c3d85eaf1f930c7bf20f",
    measurementId: "G-NZPRECBHD0"
}

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth()
const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth();
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error.message)
        }
    }

}

export {
    firestore,
    createUserProfileDocument,
    auth
}