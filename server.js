const express = require("express");
const mongoose = require("mongoose");
const ticketAPI = require("./raffleTickets/ticketAPI");
const eventAPI = require("./luckyDraw/nextEventAPI");
const participateAPI = require("./luckyDraw/participateAPI");
const lastWeekWinner = require("./luckyDraw/lastWeekWinners");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const uri = process.env.ATLAS_URI;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("connection with the database is established");
  }
);

const port = 3000 || process.env.PORT;

app.use(ticketAPI);
app.use(eventAPI);
app.use(participateAPI);
app.use(lastWeekWinner);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
