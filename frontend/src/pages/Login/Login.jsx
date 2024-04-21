const Login = () => {
  return (
    <div className="flex flex-col  justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
        <form>
          <div>
            <label className=" p-2">
              <span className="">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input  h-10"
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
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-red-600 mt-2 inline-block"
          >
            Maybe wanna Sign Up Instead
          </a>
          <div className="flex justify-center">
            <button className="bg-white mt-2 w-32 rounded-md">Login in </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
