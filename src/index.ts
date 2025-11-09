import express ,{ type Request,type Response,type NextFunction } from "express"

const app = express();

app.use(express.json());

//custom middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
})

// Route with potential error
app.get("/divide", (req: Request, res: Response, next: NextFunction) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) throw new Error("Invalid numbers");
    if (b === 0) throw new Error("Cannot divide by zero");

    res.json({ result: a / b });
  } catch (err) {
    next(err); // pass error to global handler
  }
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);
  res.status(400).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});


app.listen(3000, ()=> {
  console.log(`Server running on port ${3000}`)
})
