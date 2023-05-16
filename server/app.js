require("dotenv").config();
require("@babel/register");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const express = require("express");
const dbCheck = require("./src/middlewares/dbCheck");

const app = express();
const PORT = process.env.PORT || 3001;

const sessionConfig = {
  name: "Cookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3002",
      "http://localhost:3003",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(session(sessionConfig));
app.use("/login", (req, res, next) => {
  console.log("session=>", req.session);
  next();
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(dbCheck);

app.listen(PORT, () => {
  console.log("Server started");
});
