const path = require("../../util/path");
const authenticate = require("../services/auth");
const session = require('express-session')

const getLoginPage = (req, res) => {
  res.render(path.join(path.viewsPath, "home"));
};

const Login = async (req, res) => {
  try {
    let token = await authenticate({
      ...req.body,
      isEmployee: req.body.Occupation == "Employee"
    });
    if (token == null) throw Error("not authorized");
    console.log(token);
    req.session.isEmployee = req.body.Occupation == "Employee";
    req.session.token = token;
    req.session.save(err => {
      console.log(err);
      res.send({
        success: true,
        data: { token }
      });
    });
  } catch (err) {}
};
module.exports = { getLoginPage, Login };
