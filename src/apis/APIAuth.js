import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
      if (err.code === "auth/invalid-login-credentials") {
        toast.error("Your Email or Password is Wrong!");
      }
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
      if (err.code === "auth/popup-closed-by-user") {
        toast.error("oAuth invalid, popup closed by user!");
      }
      console.error(err);
      throw new Error(err);
    }
  },
};
