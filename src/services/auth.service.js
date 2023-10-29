import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../configs/firebase";

export class AuthService {
  // function to authorized user
  isAuthorized() {
    if (this.getToken() || this.getRefreshToken()) {
      return true;
    }
    return false;
  }

  // get token from cookies
  getToken() {
    const token = Cookies.get("idToken") || Cookies.get("oauthAccessToken");
    return token;
  }

  // get refresh token from cookies
  getRefreshToken() {
    return Cookies.get("refreshToken");
  }

  // store credential to cookie
  storeCredentialsToCookie({ idToken, oauthAccessToken, refreshToken }) {
    // set token expires
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + 10);
    // if there is a token id, then set token id to cookies
    if (idToken) Cookies.set("idToken", idToken, { expires });

    // if there is a oauth accesstoken , then set oauth access token to cookies
    if (oauthAccessToken)
      Cookies.set("oauthAccessToken", oauthAccessToken, { expires });

    // set refresh token to cookie
    Cookies.set("refreshToken", refreshToken);
  }

  // clear credentials from cookie when user is logged out
  clearCredentialsFromCookie() {
    Cookies.remove("idToken");
    Cookies.remove("oauthAccessToken");
    Cookies.remove("refreshToken");
  }

  // function for logged out.
  async logOut() {
    try {
      await signOut(auth);
      this.clearCredentialsFromCookie();
    } catch (err) {
      console.error(err);
    }
  }
}
