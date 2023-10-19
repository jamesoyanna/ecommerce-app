import mongoose from "mongoose"; // mongoose is a document constructor for mongoDB

const connectDB = async () => {
  if (process.env.MONGO_URI !== undefined) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected successfuly to: ${conn.connection.host}`);
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
};

export default connectDB;