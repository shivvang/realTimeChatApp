import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    //this accesibble because protectRoute middleWare get us id of currently logged in user
    const loggedInUserId = req.user._id;

    //this is like accessing all the user in database except from one who is logged in
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } });

    return res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in user Controller", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
