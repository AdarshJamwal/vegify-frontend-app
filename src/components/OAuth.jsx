// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useDispatch} from 'react-redux'; 
import { signInSuccess } from "../redux/user/userSlice";
import {useNavigate} from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d2367.firebaseapp.com",
  projectId: "mern-auth-d2367",
  storageBucket: "mern-auth-d2367.appspot.com",
  messagingSenderId: "566158046579",
  appId: "1:566158046579:web:772762bb705b5382dd0106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// OAuth Component
const OAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL, 
        }),
      })
      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      console.log("Could not Login with Google: ", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;

















