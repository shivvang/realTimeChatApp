export const signUp = async (req, res) => {
  const { userName, fullName, password, confirmPassword } = req.body;
};
export const login = (req, res) => {
  res.send("login stuff");
};

export const logOut = (req, res) => {
  res.send("logging out maybe");
};
