const express = require("express");
const router = express.Router();
const Attendee = require("../../models/users/attendee.js");
const Researcher = require("../../models/users/researcher.js");
const WorkshopConductor = require("../../models/users/workshopConductor");
const ResearchApproval = require("../../models/reviewer/researchPaperApproval");

//get the count of the attendees registered to the system
router.get("/attendeescount", async (req, res) => {
  console.log("attendeescount-GET");
  await Attendee.find({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

//get the count of the researches registered to the system
router.get("/researchescount", async (req, res) => {
  await Researcher.find({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

//get the count of the workshop conductees registered to the system
router.get("/workshopscount", async (req, res) => {
  await WorkshopConductor.find({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

//get the count of the approved research papers
router.get("/paperscount", async (req, res) => {
  await ResearchApproval.find({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

//get the count of the all
router.get("/countall", async (req, res) => {
  let countObj = {
    attendees: "",
    workshops: "",
    researchers: "",
    papers: "",
  };
  await Attendee.countDocuments({}).then((attendees) => {
    countObj.attendees = attendees;
  });
  await WorkshopConductor.countDocuments({}).then((workshops) => {
    countObj.workshops = workshops;
  });
  await Researcher.countDocuments({}).then((researchers) => {
    countObj.researchers = researchers;
  });
  await ResearchApproval.countDocuments({}).then((papers) => {
    countObj.papers = papers;
  });

  res.status(200).json({ countObj });
});

router.post("/test", (req, res) => {
  console.log("called test");
  console.log(req.body);
});

module.exports = router;
