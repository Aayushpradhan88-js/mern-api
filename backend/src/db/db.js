import mongoose from "mongoose";
// ongodb+srv://girimahesh614:aayushpradhan123@cluster0.pxu0v9r.mongodb.net/?retryWrites=true&w=majority
const DB_NAME = "CRUDAPPLICATION"
const MONGODB_URI = "mongodb+srv://girimahesh614:2LuJAM89VVcqpYr3@cluster0.pxu0v9r.mongodb.net"
//password = mernproject, username: asyncaayush
const dbConnection = async () => {
    try {
        //?? - "nullish coalescing operator"
        // if (!MONGODB_URI) {
        //     throw new Error("MONGODB_URI environmental variable is not set")
        // }
        const connectionString = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)

        return console.log("MONGODB IS SUCCESSFULLY CONNECTED")
    } catch (error) {
        console.log("MONGODB CONNECTION IS FAILED", error)
    }
}
export { dbConnection }