const express = require("express");
const mongoose = require("mongoose");
const ticketAPI = require("./raffleTickets/ticketAPI");
const eventAPI = require("./luckyDraw/nextEventAPI");
const participateAPI = require("./luckyDraw/participateAPI");
const lastWeekWinnerAPI = require("./luckyDraw/lastWeekWinnersAPI");
const addEventAPI = require("./luckyDraw/addEventAPI");
const userAPI = require("./user/userAPI");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//NOTE:: Database connection
const uri = process.env.DB_URI;
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

const port = 9000 || process.env.PORT;

//NOTE:: API routes
app.use("/api", ticketAPI);
app.use("/api", eventAPI);
app.use("/api", participateAPI);
app.use("/api", lastWeekWinnerAPI);
app.use("/api", addEventAPI);
app.use("/api", userAPI);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
