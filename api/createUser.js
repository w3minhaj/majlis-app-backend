const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel.js");
const bcrypt = require("bcryptjs");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then((con) => {
  console.log("Database Connected");
});

const importUser = async () => {
  try {
    const user = {
      username: process.env.SEED_USERNAME,
      password: process.env.SEED_PASSWORD,
    };
    console.log(user);

    await User.create(user);

    console.log("User created!");
    process.exit();
  } catch (error) {
    process.exit(1);
  }
};

importUser();
