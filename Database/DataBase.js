const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

const tasksSchema = new mongoose.Schema({
  userName: String,
  password: String,
  phoneNumber: String
});

let Users = new mongoose.model("users", tasksSchema);

let addUser = (repo, cb) => {
  Users.create(repo, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};
let getUsers = cb => {
  Users.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let auth = (user, cb) => {
  Users.find(user, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};

module.exports = {
  addUser,
  getUsers,
  auth
};
