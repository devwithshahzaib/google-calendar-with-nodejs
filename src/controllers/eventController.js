const { calendar } = require("../config/calendar.config");
const calendarId = process?.env?.GOOGlE_CALENDAR_ID;
exports.createEvent = async (req, res, next) => {
  try {
    const { event } = req.body;
    console.log("Create Triggered");
    const eventData = await calendar.events.insert({
      calendarId,
      requestBody: event,
      resource: event,
    });
    res.status(200).send({
      eventData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.toString());
  }
};
exports.updateEvent = async (req, res, next) => {
  try {
    const { googleEventpayload, id } = req.body;

    // Validate that googleEventpayload.event is present and valid
    if (!googleEventpayload || !googleEventpayload.event) {
      throw new Error("Invalid event payload");
    }

    const eventData = await calendar.events.update({
      calendarId,
      eventId: id,
      resource: googleEventpayload.event,
    });

    res.status(200).send({
      eventData,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send(err.toString());
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const { events } = req.body;
    const eventIds = Object.values(events);
    await Promise.all(
      eventIds.map(async (id) => {
        await calendar.events.delete({
          calendarId: defaultId,
          eventId: id,
        });
      })
    );
    res.status(200).send("Events deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(400).send(err.toString());
  }
};
