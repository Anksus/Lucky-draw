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

    console.log(data);
  } catch (e) {
    res.status(400).send(e);
  }

  res.send("done");
});

module.exports = router;
