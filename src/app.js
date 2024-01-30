require("dotenv").config();

const express = require("express");

const port = process.env.APP_PORT;
const app = express();



app.use(express.json());

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

  
const movieControllers = require("./controllers/movieControllers");
const validateMovies = require("./middlewares/validateMovie");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies", validateMovies, movieControllers.postMovie);
app.put("/api/movies/:id", validateMovies, movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

const userControllers = require("./controllers/userControllers");
const validateUsers = require("./middlewares/validateUser");

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);
app.post("/api/users", validateUsers, userControllers.postUsers);
app.put("/api/users/:id", validateUsers, userControllers.updateUser);
app.delete("/api/users/:id", userControllers.deleteUser);



module.exports = app;