const express = require("express");
const {
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const router = express.Router();

router.route("/create").post(createEvent);
router.route("/update").post(updateEvent);
router.route("/delete").post(deleteEvent);

module.exports = router;
