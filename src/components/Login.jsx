import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "./firebaseConfig";

const Login = () => {
	const loginWithGoogle = async () => {
		await signInWithPopup(auth, googleProvider);
	};

	return (
		<div className="bg-gradient-to-r from-blue-500 to-purple-600 p-12 rounded-lg shadow-2xl flex flex-col items-center space-y-4">
			<h1 className="text-2xl font-bold text-gray-700">Welcome</h1>
			<button onClick={loginWithGoogle} className="bg-white flex items-center space-x-3 px-6 py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 active:shadow-none duration-300">
				<FcGoogle size={24} />
				<span className="text-gray-700 font-medium">Login with Google</span>
			</button>
		</div>
	);
};

export default Login;
