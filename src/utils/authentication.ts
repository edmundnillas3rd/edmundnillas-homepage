import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export function initFirebaseAuth() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      console.log("user not signed in: ", user);
    }
  });
}

export async function signInAdmin() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

export function signOutAdmin() {
  signOut(auth);
}

export function isUserSignedIn() {
  return (
    !!auth.currentUser &&
    auth.currentUser.email === process.env.NEXT_PUBLIC_GMAIL
  );
}
