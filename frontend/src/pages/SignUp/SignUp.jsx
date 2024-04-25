import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignUp();
  const handleSubmit = async (e) => {
    //this stops the refreshing of the page right after submission is done
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col  justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">
          Sign up
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className=" p-2">
              <span className="">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input  h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className=" p-2">
              <span className="">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input  h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div>
            <label className=" p-2">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter PassWord"
              className="w-full h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className=" p-2">
              <span className="">Confirm PassWord</span>
            </label>
            <input
              type="password"
              placeholder="Confirm PassWord"
              className="w-full h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            Maybe wanna Login in Instead
          </Link>
          <div className="flex justify-center">
            <button
              className="bg-white mt-2 w-32 rounded-md"
              disabled={loading}
            >
              {loading ? "...loading" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
