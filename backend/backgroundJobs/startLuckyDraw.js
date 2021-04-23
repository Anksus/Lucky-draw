const schedule = require("node-schedule");
const Event = require("../luckyDraw/eventModel");

const startLuckyDraw = (data) => {
  //  Event starting date and time
  const startDateAndTime = data.startsAt.toDate();

  // Scheduling Job
  const job = schedule.scheduleJob(startDateAndTime, () => {
    const val = Event.findOneAndUpdate(
      { eventName: data.eventName },
      {
        $set: { running: true },
      }
    ).then(() => {
      console.log("event started");
    });
  });
};

module.exports = startLuckyDraw;
