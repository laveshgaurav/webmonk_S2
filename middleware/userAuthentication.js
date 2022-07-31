module.exports = function (req, res, next) {
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return res.send({
      message: "Not Authenticated",
    });
  }
  next();
};
