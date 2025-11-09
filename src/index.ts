import express from "express";
import { configDotenv } from "dotenv";
import UserRoutes from "./routes/users.js";

configDotenv();

const app = express();
app.use(express.json());

// Mount the users router
app.use("/users", UserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));