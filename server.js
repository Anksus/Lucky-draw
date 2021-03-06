const express = require("express");
const path = require("path");
const ticketAPI = require("./raffleTickets/ticketAPI");
const eventAPI = require("./luckyDraw/nextEventAPI");
const participateAPI = require("./luckyDraw/participateAPI");
const lastWeekWinnerAPI = require("./luckyDraw/lastWeekWinnersAPI");
const addEventAPI = require("./luckyDraw/addEventAPI");
const userAPI = require("./user/userAPI");
const runningEvent = require("./luckyDraw/runningEvent");
const addUser = require("./user/addUser");
const cors = require("cors");

require("./db/db");
const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 3000;

//NOTE:: API routes
app.use("/api", ticketAPI);
app.use("/api", eventAPI);
app.use("/api", participateAPI);
app.use("/api", lastWeekWinnerAPI);
app.use("/api", addEventAPI);
app.use("/api", userAPI);
app.use("/api", runningEvent);
app.use("/api", addUser);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
