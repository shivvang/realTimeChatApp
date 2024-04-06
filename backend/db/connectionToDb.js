import mongoose from "mongoose";

export const connectionToMongoDb = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to database", result.connection.host);
  } catch (error) {
    console.log("error connecting to database", error.message);
  }
};
