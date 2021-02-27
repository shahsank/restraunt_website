const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cors = require("cors");
const Port = 9999;
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
const session_secret = "shukla";
app.use(
  session({ secret: session_secret, resave: true, saveUninitialized: true })
);

const userDB = mongoose.createConnection("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
});

const userModel = userDB.model("user", userSchema);

const isNullorUndefined = (val) => val === null || val === undefined;
const SALT = 8;

// signup code

app.post("/signup", async (req, res) => {
  const {
    userName,
    password,
    fullName,
    email,
    phoneNumber,
    address,
  } = req.body;
  if (
    userName.length === 0 ||
    password.length === 0 ||
    fullName.length === 0 ||
    email.length === 0 ||
    phoneNumber.length === 0 ||
    address.length === 0
  )
    res.status(401).send({ err: "Fill all credentials." });
  else {
    const existngUser = await userModel.findOne({ userName });
    if (isNullorUndefined(existngUser)) {
      const hashedPwd = bcrypt.hashSync(password, SALT);
      const newUser = new userModel({
        fullName,
        userName,
        password: hashedPwd,
        phoneNumber,
        address,
        email,
      });
      await newUser.save();
      req.session.userId = newUser._id;
      res.send({
        success: `Congratulations ${userName}! Your account has been created.`,
      });
    } else {
      res.status(404).send({ err: "Username already exists." });
    }
  }
});

// login code

app.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  if (userName.length === 0 || password.length === 0)
    res.status(401).send({ err: "Fill all credentials." });
  else {
    const existngUser = await userModel.findOne({ userName });
    if (isNullorUndefined(existngUser)) {
      res.status(401).send({ err: "Username does not exist!" });
    } else {
      const hashedPwd = existngUser.password;
      if (bcrypt.compareSync(password, hashedPwd)) {
        req.session.userId = existngUser._id;
        res.status(200).send({ success: "Logged in successfully" });
      } else {
        res.status(401).send({ err: "Incorrect Password!" });
      }
    }
  }
});

// for fetching authorized user info

const AuthMiddleware = async (req, res, next) => {
  if (isNullorUndefined(req.session) || isNullorUndefined(req.session.userId)) {
    res.status(401).send({ err: "Not logged in" });
  } else {
    next();
  }
};

app.get("/userInfo", AuthMiddleware, async (req, res) => {
  const data = await userModel.findOne({ _id: req.session.userId });
  res.send(data);
});

//logout code

app.get("/logout", async (req, res) => {
  if (!isNullorUndefined(req.session)) {
    req.session.destroy(() => res.status(200).send("destroyed"));
  } else {
    res.sendStatus(200);
  }
});

//checking for sessions

app.get("/loggedin", AuthMiddleware, (req, res) => {
  res.send({ ok: "logged in" });
});

// menu backend

const menuSchema = new mongoose.Schema();
const menuModel = userDB.model("menu", menuSchema);

app.get("/menu", async (req, res) => {
  const menu = await menuModel.find().select({
    name: true,
    desc: true,
    price: true,
    _id: false,
  });
  res.send(menu);
});
app.get("/menu/dessert", async (req, res) => {
  const dessert = await menuModel.find({ itemType: "Dessert" });
  res.send(dessert);
});

app.get("/menu/ss", async (req, res) => {
  const ss = await menuModel.find({ itemType: {$in: [ "Soup", "Salad" ]}});
  res.send(ss);
});

app.get("/menu/pizza", async (req, res) => {
  const pizza = await menuModel.find({ itemType: "Pizza" });
  res.send(pizza);
});

app.get("/menu/burger", async (req, res) => {
  const burger = await menuModel.find({ itemType: "Burgers" });
  res.send(burger);
});

app.get("/menu/maincourse", async (req, res) => {
  const maincourse = await menuModel.find({ itemType: "Main Course" });
  res.send(maincourse);
});

app.get("/menu/beverages", async (req, res) => {
  const beverages = await menuModel.find({ itemType: "Beverages" });
  res.send(beverages);
});

app.get("/menu/fajitas", async (req, res) => {
  const fajitas = await menuModel.find({ itemType: "Fajitas" });
  res.send(fajitas);
});

app.get("/menu/pasta", async (req, res) => {
  const pasta = await menuModel.find({ itemType: "Pastas" });
  res.send(pasta);
});

app.get("/menu/appetizers", async (req, res) => {
  const appetizers = await menuModel.find({ itemType: "Appetizer" });
  res.send(appetizers);
});

app.listen(Port);
