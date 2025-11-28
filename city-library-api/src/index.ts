import express from "express";
import bookRoutes from './routes/bookRoutes'

const app = express();
app.use(express.json());

//Mount the routes
app.use('/books',bookRoutes);

app.listen(3003, ()=> {
  console.log("City Library api running on port 3003")
})