import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

//2. Mount the routes
// This says: "If any requests starts with /Users, go to userRoutes"
app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`)
});
