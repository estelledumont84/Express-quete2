

const express = require("express");


const app = express();



app.use(express.json());




const movieControllers = require("./controllers/movieControllers");
const validateMovies = require("./middlewares/validateMovie");
const { hashPassword } = require("../auth.js");


app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies", validateMovies, movieControllers.postMovie);
app.put("/api/movies/:id", validateMovies, movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

const userControllers = require("./controllers/userControllers");
const validateUsers = require("./middlewares/validateUser");

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);
app.post("/api/users", validateUsers, hashPassword, userControllers.postUsers);
app.put("/api/users/:id", validateUsers, hashPassword, userControllers.updateUser);
app.delete("/api/users/:id", userControllers.deleteUser);





module.exports = app;