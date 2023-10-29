import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../configs/firebase";
import { authService } from "../configs/auth";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const APIAuth = {
  // signin with email and password
  signInWithCredentials: async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { idToken, refreshToken } = result._tokenResponse;
      // store credentials to cookie
      authService.storeCredentialsToCookie({ idToken, refreshToken });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },

  // signin with google oauth
  signInWithGoogleOAuth: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { oauthAccessToken, refreshToken } = result._tokenResponse;
      authService.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
      // get data by uid, from firestore
      const user = result.user;
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0];
      // if there's no one data that have a same uid, this actions will running (to aviod duplicate data)
      if (!data) {
        // add user data to firestore database
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          image: null,
          createdAt: serverTimestamp(),
        });
      }
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },

  // register/signup with email and password
  signUpWithEmailPassword: async (email, password, name) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        image: null,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      // catch if email already in used
      if (err.code === "auth/email-already-in-use") {
        toast.error("email already in used, try another email!");
        // catch error when email is invalid
      } else if (err.code === "auth/invalid-email") {
        toast.error("email is not valid!");
      }
      console.error(err);
    }
  },
};
