// routes/event.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const Audience = require('../models/Audience');

// Get all audience for a specific event
router.get('/:eventId', async (req, res) => {
  try {
    console.log(req.params.eventId);
    console.log("working");
    const event = await Event.findOne({ uniqueId: req.params.eventId }).populate('audience'); //NOT WORKINH THIS LINEEEEEEEEEEEEEEEE
    console.log("audienceee vala bk")
    res.json(event.audience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const Event = require('../models/event'); // Assuming you have an Event model

// // Route to fetch all events
// router.get('/', async (req, res) => {
//   try {
//     console.log("helloooo from bsck")
//     const allEvents = await Event.find({}, 'uniqueId eventName eventCategory');
//     res.json(allEvents);
//   } catch (error) {
//     console.error('Error fetching all events:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;