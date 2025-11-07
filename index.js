import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();
app.use(express.json());

//sample route with try-catch
app.get("/divide", (req,res, next) => {
  try {
    const { a,b } = req.query;
    if(!a || !b) throw new Error("Both 'a' and 'b' are required.");
    if(b == 0) throw new Error("Cannot divide by zero.");
    const result = Number(a) / Number(b);
    res.json({ result });
  } catch (err) {
    next(err); //pass error to middleware
  }
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error("Error: ", err.message);
  res.status(400).json({
    success: false,
    message: err.message || "Something went wrong.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))