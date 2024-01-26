require("dotenv").config();

const express = require("express");

const port = process.env.APP_PORT;
const app = express();



app.use(express.json());

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

  
const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies", movieControllers.postMovie);
app.put("/api/movies/:id", movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

const userControllers = require("./controllers/userControllers");

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);
app.post("/api/users", userControllers.postUsers);
app.put("/api/users/:id", userControllers.updateUser);
app.delete("/api/users/:id", userControllers.deleteUser);



module.exports = app;