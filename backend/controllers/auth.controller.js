import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { userName, fullName, password, confirmPassword } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "password dont match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res
        .status(400)
        .json({ error: "user already exists ,try logging in" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //dealing with profile pic
    //using this https://avatar.iran.liara.run/username?username=[firstname+lastname] for generating profile pic
    //will add custom image upload for user later

    const userProfile = `https://avatar.iran.liara.run/username?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      profilePicture: userProfile,
    });

    await newUser.save();

    if (newUser) {
      //generate jwt token (util function)
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("error in sign up controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logOut = async (req, res) => {
  try {
    res.cookie("jwtToken", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
