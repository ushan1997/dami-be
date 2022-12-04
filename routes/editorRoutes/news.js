const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const News = mongoose.model("News");

//add news
router.post('/addNews', (req, res) => {
  const { title, description, imgURL } = req.body
  // const {imgURL} = req.body
  // console.log(imgURL)
  const news = new News({
    title: title,
    description: description,
    imgURL: imgURL
  })
  news.save().then(result => {
    res.json({ news: result })
  })
    .catch(err => {
      console.log(err)
    })
})

//get all added posts
router.get('/viewNews', (req, res) => {
  News.find().then(news => {
    res.json({ news })
  }).catch(err => {
    console.log(err);
  })
})

//get one news post
router.get('/viewNewsOne/:id', (req, res) => {
  News.findById(req.params.id)
    .then(news => {
      res.json({ news })
    }).catch(err => {
      console.log(err)
    })
})

//update the news post
router.put('/updateNews/:id', (req, res) => {
  News.findByIdAndUpdate(req.params.id,
    { $set: req.body })
    .then(() => res.json("Updated"))
    .catch(err => console.log(err))
})

//delete the news post
router.delete('/deleteNews/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted!"))
    .catch(err => console.log(err))
})

module.exports = router;