const express = require("express");
const userAuth = require("./middleware/userAuthentication");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userAuth);

app.get("/", (req, res) => {
  console.log(req.query);
  return res.send({ message: "Server is running fine" });
});

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(6000, () => {
  console.log("Server is running on port 6000");
  mongoose
    .connect(
      "mongodb+srv://webmonk:webmonk@cluster0.gp38f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
});
