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
  signInWithCredentials: async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { idToken, refreshToken } = result._tokenResponse;
      authService.storeCredentialsToCookie({ idToken, refreshToken });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },

  signInWithGoogleOAuth: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { oauthAccessToken, refreshToken } = result._tokenResponse;
      authService.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
      const user = result.user;
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0];
      if (!data) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          photoUrl: user.photoURL,
          createdAt: serverTimestamp(),
        });
      }
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  },

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
        createdAt: serverTimestamp(),
      });
      toast.success("your data has been signup successfully!");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("email already in used, try another email!");
      } else if (err.code === "auth/invalid-email") {
        toast.error("email is not valid!");
      }
      console.error(err);
    }
  },
};
