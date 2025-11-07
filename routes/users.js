import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "All users"});
});

router.post("/",(req,res) => {
  res.json({ message: "User created" });
});

export default router;