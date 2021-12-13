const express = require("express")

const app = express()

app.use(express.json())

const userController = require("./controllers/user.controller")

const movieController = require("./controllers/movie.controller")

const theatreController = require("./controllers/theatre.controller")

const showController = require("./controllers/show.controller")

const screenController = require("./controllers/screen.controller")

const seatController = require("./controllers/seat.controller")

const signinController = require("./controllers/signin.controller")

app.use("/user",userController)

app.use("/movies",movieController)

app.use("/theatre",theatreController)

app.use("/shows",showController)

app.use("/screen",screenController)

app.use("/seat",seatController)

app.use("/signin",signinController)

module.exports = app