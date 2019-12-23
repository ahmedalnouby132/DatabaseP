const join = require("../../util/path");

const getLoginPage = (req, res) => {
  res.render(join(__dirname, "..", "views", "home.ejs"));
};

const Login = async (req, res) => {};
module.exports = { getLoginPage, Login };
