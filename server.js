const express = require("express");
const mongoose = require("mongoose");
const ticketAPI = require("./raffleTickets/ticketAPI");
const eventAPI = require("./luckyDraw/nextEventAPI");
const participateAPI = require("./luckyDraw/participateAPI");
const lastWeekWinnerAPI = require("./luckyDraw/lastWeekWinnersAPI");
const addEventAPI = require("./luckyDraw/addEventAPI");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connection with the database is established");
  }
);

const port = 3000 || process.env.PORT;

// API routes`
app.use(ticketAPI);
app.use(eventAPI);
app.use(participateAPI);
app.use(lastWeekWinnerAPI);
app.use(addEventAPI);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
