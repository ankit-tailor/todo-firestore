import "./App.css";
import { React } from "react";
import Form from "./components/Form";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "./firebase";

const App = () => {
  // const [user] = useAuthState(auth);
  const user = "user";
  const signInWithGoogle = () =>
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  const signIn = () => <button onClick={signInWithGoogle}>SignIn</button>;

  return <div className="container">{user ? <Form /> : signIn()}</div>;
};

export default App;
