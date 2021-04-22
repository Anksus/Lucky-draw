const express = require("express");
const router = new express.Router();
const Event = require("./eventModel");

router.get("/get-participants", async (req, res) => {
  const data = req.body;
  try {
    const participantsData = await Event.findOne({ eventName: data.eventName })
      .select({ participants: 1 })
      .exec();
    const participantsName = participantsData.participants.map((val) => {
      return val.email;
    });
    if (participantsName) {
      res.status(201).send(participantsName);
    } else {
      res.status(201).send("no participants found!!");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
