const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Speaker = mongoose.model("Speaker");


//add a speaker
router.post('/addSpeaker', (req, res) => {
  const { name, description, imgURL } = req.body
  // const {imgURL} = req.body
  // console.log(imgURL)
  const speaker = new Speaker({
    name: name,
    description: description,
    imgURL: imgURL
  })
  speaker.save().then(result => {
    res.json({ speaker: result })
  })
    .catch(err => {
      console.log(err)
    })
})

//get all added speakers
router.get('/viewSpeaker', (req, res) => {
  Speaker.find().then(speaker => {
    res.json({ speaker })
  }).catch(err => {
    console.log(err);
  })
})

//get one speaker
router.get('/viewSpeakerOne/:id', (req, res) => {
  Speaker.findById(req.params.id)
    .then(speaker => {
      res.json({ speaker })
    }).catch(err => {
      console.log(err)
    })
})

//update the speaker
router.put('/updateSpeaker/:id', (req, res) => {
  Speaker.findByIdAndUpdate(req.params.id,
    { $set: req.body })
    .then(() => res.json("Updated"))
    .catch(err => console.log(err))
})

//delete the speaker
router.delete('/deleteSpeaker/:id', (req, res) => {
  Speaker.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted!"))
    .catch(err => console.log(err))
})

module.exports = router;