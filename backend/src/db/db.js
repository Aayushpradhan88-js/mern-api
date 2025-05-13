import mongoose from "mongoose";

const DB_NAME = "CRUDAPPLICATION";
const MONGODB_URI =
  //    "mongodb+srv://aayush123:ENvo7xYdwwizjpy@cluster0.pxu0v9r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  "mongodb+srv://asyncaayush:AKovIYjEJh49WQrN@cluster0.mysnzkg.mongodb.net";
const dbConnection = async () => {
  try {
    const connectionString = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    )
    return console.log("MONGODB IS SUCCESSFULLY CONNECTED");
  } catch (error) {
    console.log("MONGODB CONNECTION IS FAILED", error);
    process.exit(1);
  }
};
export { dbConnection };
