import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9CbQb9J3hx_7Yx6x28ou7IkL4wQ7NSAs",
    authDomain: "assignment-fa252.firebaseapp.com",
    projectId: "assignment-fa252",
    storageBucket: "assignment-fa252.appspot.com",
    messagingSenderId: "286460533891",
    appId: "1:286460533891:web:0298d761d0959345c80fb6",
    measurementId: "G-EP1V5CXHXS"
};

export const firebaseInitilazed = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const userWithEmailAndPassword = (name, email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            verifyEmail();
            updateName(name);
            const newUser = userCredential.user;
            newUser.error = '';
            newUser.isLoggedIn = true;
            newUser.success = 'User created successfully';
            return newUser;
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

const updateName = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        console.log("profile updated successfully");
    }).catch((error) => {
        console.log(error);
    });
}

const verifyEmail = () => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("Email verified successfully");
        });
}