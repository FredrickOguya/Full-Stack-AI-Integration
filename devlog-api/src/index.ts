import express from 'express';
import postRoutes from './routes/postRoutes';

const app  = express();
app.use(express.json());

//Mount the routes
app.use('/posts', postRoutes);

app.listen(3000, ()=> {
  console.log("Devlog API running on port 3000")
});