import cors from "cors";
import { app } from "./src/app.js";
import { dbConnection } from "./src/db/db.js";
// import cors from 'cors';

dbConnection();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = 5000;

app.listen(PORT || 3000, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
