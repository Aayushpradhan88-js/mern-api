import dotenv from 'dotenv';
dotenv.config();
import { app } from "./src/app.js"
// import { dbConnection } from "./src/db/db.js"

// dbConnection()

const PORT = 5000 //PORT

app.listen(PORT || 3000, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})