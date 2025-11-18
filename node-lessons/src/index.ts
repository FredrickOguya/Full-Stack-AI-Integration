import type { Request, Response } from 'express';
const express = require('express');

// 1. Create the application
const app = express();
const port = 3000;

// 2. Define a route
// When someone visits the root URL ('/'), do this:
app.get('/', (req: Request, res: Response) => {
  res.send('Hello! I am a server running with TypeScript.');
});

// 3. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/about', (req: Request, res: Response)=>{
  res.json({
    "name": "Fredrick Onyango",
    "stack": ["React", "TypeScript", "Node"]
  })
})