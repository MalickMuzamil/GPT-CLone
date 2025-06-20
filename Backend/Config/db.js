import mongoose from "mongoose";

export const connectDB = async () => {
 
    try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  
  catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};