import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const dbUrl = "mongodb://localhost:27017/ntdl_db";
    if (!process.env.MONGO_URL) {
      return console.log("mongodb url not available");
    }
    const con = await mongoose.connect(process.env.MONGO_URL);
    con.connections && console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
