import mongoose from "mongoose";

const conToDb = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true, // Recommended for compatibility
      useUnifiedTopology: true, // Recommended for modern drivers
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure code
  }

  // Enable Mongoose debugging in development mode
  if (process.env.NODE_ENV === "development") {
    mongoose.set("debug", true);
  }
};

export default conToDb;
