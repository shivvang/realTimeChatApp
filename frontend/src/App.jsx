import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="p-4 flex items-center justify-center w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
