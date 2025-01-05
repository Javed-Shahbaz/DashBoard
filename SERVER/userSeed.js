import User from "./models/User.js";
import bcrypt from "bcrypt";
import conToDb from "./dataBase/db.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const userRegister = async () => {
  try {
    // Connect to the database
    await conToDb();

    // Hash the password
    const hashPassword = await bcrypt.hash("admin", 10);

    // Create a new user instance
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin", // Use lowercase to match the enum
    });

    // Save the user to the database
    await newUser.save();
    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

userRegister();
