import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

const createAccount = async ({ email, name, password }) => {
  const auth = getAuth();
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      name,
      avatar: "",
      id: user.uid,
      email,
      password,
    });

    toast.success("Account Created Successfully.");
  } catch (error) {
    toast.error("something went wrong");
    console.log(error);
  }
};

export default createAccount;
