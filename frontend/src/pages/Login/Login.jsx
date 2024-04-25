import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSumit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };
  return (
    <div className="flex flex-col  justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
        <form onSubmit={handleSumit}>
          <div>
            <label className=" p-2">
              <span className="">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input  h-10"
              onClick={(e) => setUserName(e.currentTarget.value)}
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
              onClick={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            Maybe wanna Sign Up Instead
          </Link>
          <div className="flex justify-center">
            <button
              className="bg-white mt-2 w-32 rounded-md"
              disabled={loading}
            >
              {loading ? "loading" : "Login in"}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
