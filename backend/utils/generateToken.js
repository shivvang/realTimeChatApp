import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwtToken", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //suppose to be in milliseconds
    httpOnly: true, //prevents xss attacks cross site scripting attack
    sameSite: "strict", //csrf attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
