const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Speaker = mongoose.model("Speaker");
//get all keynotespeakers
router.get("/keynotespeakers", async (req, res) => {
  await Speaker.find({})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
});

module.exports = router;
