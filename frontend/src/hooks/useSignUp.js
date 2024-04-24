import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ userName, fullName, password, confirmPassword }) => {
    const success = handleInputErrors({
      userName,
      fullName,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);

    try {
      //for the url change go and check vite.config to find your answer
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, userName, password, confirmPassword }),
      });

      const data = await res.json();
      // console.log("value we get after calling from frontend to backend", data);
      if (data.error) {
        throw new Error(data.error);
      }

      //local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({ userName, fullName, password, confirmPassword }) {
  if (!fullName || !userName || !password || !confirmPassword) {
    toast.error("please fill in all the fields");
    return false;
  }
  if (confirmPassword !== password) {
    toast.error("passwords do not Match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be of at least 6 characters");
    return false;
  }

  return true;
}
