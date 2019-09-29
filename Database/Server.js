const express = require("express");
const cors = require("cors");
const mongo = require("./DataBase");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("server is working");
});
app.get("/users", (req, res) => {
  mongo.getUsers(result => {
    res.send(result);
  });
});

app.post("/user", (req, res) => {
  const user = req.body;
  mongo.addUser(user, result => {
    res.send(result);
  });
});

app.post("/auth", (req, res) => {
  console.log("user", req.body);
  const user = req.body;

  mongo.auth(user, result => {
    res.json(result);
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
