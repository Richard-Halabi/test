import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.send('Hi from server');
});

// Serve static assets in production

app.listen(PORT, console.log(`Server Started on Port ${PORT}`)!);
