const express = require('express');
const movies = require('./movies.json')

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'I\'m alive!!! GO!' }));

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const findIdMovie = movies.find((movie) => movie.id === Number(id));

  res.status(200).json(findIdMovie);
});

app.get('/movies', (req, res) => res.status(200).json(movies));

app.post('/movies', (req, res) => {
  const movieId = movies[movies.length - 1].id + 1;
  const newMovie = {
    id:  movieId,
    ...req.body,
  };
  movies.push(newMovie);

  res.status(201).json(movies)
})

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  
  const updateMovie = movies.find((movie) => movie.id === Number(id));

  updateMovie.movie = movie;
  updateMovie.price = price;

  res.status(200).json(movies);
})

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = movies.findIndex((movie) => movie.id === Number(id));
  movies.splice(arrayPosition, 1);

  res.status(200).end();
})

app.patch('/search', (req, res) => {
  const { q } = req.query
  const filteredMovies = movies.filter(({movie}) => movie.toLowerCase().includes(q))

  res.status(200).json(filteredMovies);
})

module.exports = app;