import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";

const Login = () => {
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return <button onClick={loginWithGoogle}>Login with Google</button>;
};

export default Login;
