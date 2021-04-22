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
  const job = schedule.scheduleJob(endTime, () => {
    const participantsData = Event.findOne({ eventName: data.eventName })
      .select({ participants: 1 })
      .exec()
      .then((val) => {
        const participantsName = val.participants.map((ele) => {
          return ele.email;
        });
        console.log(chooseWinner(participantsName));
        const eventWinner = chooseWinner(participantsName);
        Event.findOneAndUpdate(
          { eventName: data.eventName },
          {
            $set: { finished: true },
            $push: {
              winner: eventWinner,
            },
          }
        ).then(() => {
          console.log("Updated successfully");
        });
      });
  });
};

module.exports = computeWinner;
