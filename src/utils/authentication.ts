import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export function initFirebaseAuth(callback) {
  onAuthStateChanged(auth, callback);
}

export async function signInAdmin(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  return userCredential.user;
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
