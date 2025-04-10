// first create a folder
// command prompt navigate to that folder
// run the following commands
// npm init -y
// npm install express mongoose
// save the following code in a file named app.js
// run the following command to start the server
// node app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb');
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseYear: Number,
  genre: String
});
const Movie = mongoose.model('Movie', movieSchema);
app.post('/movies', async (req, res) => {
  let m = new Movie(req.body);
  await m.save();
  res.send(m);
});
app.get('/movies', async (req, res) => {
  let all = await Movie.find();
  res.send(all);
});
app.get('/movies/:id', async (req, res) => {
  let m = await Movie.findById(req.params.id);
  res.send(m);
});
app.put('/movies/:id', async (req, res) => {
  let m = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(m);
});
app.delete('/movies/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});
app.listen(3000, () => console.log('Server running'));

// To test the API, use Postman
// 1. Create a new movie
//    method: POST http://localhost:3000/movies
//    Body: { "title": "Inception", "director": "Christopher Nolan", "releaseYear": 2010, "genre": "Sci-Fi" }
// 2. Get all movies
//    method: GET http://localhost:3000/movies
// 3. Get a movie by ID
//    method: GET http://localhost:3000/movies/use_movie_id_here
// 4. Update a movie
//    method: PUT http://localhost:3000/movies/use_movie_id_here
//    Body: { "title": "Inception", "director": "Christopher Nolan", "releaseYear": 2010, "genre": "Sci-Fi" }
// 5. Delete a movie
//    method: DELETE http://localhost:3000/movies/use_movie_id_here