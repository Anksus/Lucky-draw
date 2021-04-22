const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");
const moment = require("moment");

router.get("/last-week-winners", async (req, res) => {
  try {
    const data = await Event.find({
      startsAt: {
        $gte: moment().subtract(7, "days").toDate(),
        $lte: moment().toDate(),
      },
      finish: true,
    })
      .select({ winner: 1 })
      .exec();
    if (!data) {
      res.send("No Events in the last week");
    } else {
      const winners = data.map((val) => {
        return val.winner;
      });
      res.status(201).send(winners);
    }
  } catch (e) {
    res.status(400).send(e);
  }

  res.send("done");
});

module.exports = router;
