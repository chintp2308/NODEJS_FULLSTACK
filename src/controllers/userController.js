import userSevice from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // if (email === "" || email === null || email === "undefined")
  // if(!email)
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }

  let userData = await userSevice.handleUserLogin(email, password);
  //kiểm tra xem email có tồn tại hay ko-check email exist
  //so sánh password - compare password
  //return userInformation
  //access_token: JWT json web token
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  handleLogin: handleLogin,
};
