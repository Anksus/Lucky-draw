const schedule = require("node-schedule");
const chooseWinner = require("./chooseWinner");
const Event = require("../luckyDraw/eventModel");

const computeWinner = (data) => {
  const date = data.startsAt;
  const endTime = date.add(data.duration, "minutes").toDate();
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
            finish: true,
            $push: {
              winner: eventWinner,
            },
          }
        );
      });
  });
};

module.exports = computeWinner;
