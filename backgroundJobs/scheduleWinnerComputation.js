const schedule = require("node-schedule");
const chooseWinner = require("./chooseWinner");
const Event = require("../luckyDraw/eventModel");

//NOTE:: Scheduling process for computing winner
const computeWinner = (data) => {
  //NOTE:: Event starting date and time
  const date = data.startsAt;

  //NOTE:: Event ending time after given duration
  const endTime = date.add(data.duration, "minutes").toDate();

  //NOTE:: Scheduling Job
  schedule.scheduleJob(endTime, () => {
    Event.findOne({ eventName: data.eventName })
      .select({ participants: 1 })
      .exec()
      .then((val) => {
        const participantsName = val.participants.map((ele) => {
          return ele.email;
        });
        const eventWinner = chooseWinner(participantsName);
        Event.findOneAndUpdate(
          { eventName: data.eventName },
          {
            $set: { running: false, winner: eventWinner },
          }
        ).then(() => {
          console.log("computed winner");
        });
      });
  });
};

module.exports = computeWinner;
