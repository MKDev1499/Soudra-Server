import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export function mongooseConnection() {
  if (mongoose.connection.readyState === 0) {
    mongoose
      .connect(process?.env?.DBConnect, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MK MongoDB disconnected");
  });
}
