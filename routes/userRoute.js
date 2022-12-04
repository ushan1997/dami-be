const express = require("express");
const router = express.Router();
const User = require("../models/user");

//add new user
router.post("/register", async (req, res) => {
  console.log(req.body.password)
  const user = new User(req.body);
  await user
    .save()
    .then((data) => {
      res.status(201).send({ data: data });
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
});

//user login
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  await User.findOne({ email: email, password: password }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send({
        errors: err.message,
      });
    }

    if (!user) {
      return res.status(404).send({
        message: "email or password is mismatch!",
      });
    }

    return res.status(200).send({
      message: "Login successfully",
    });
  });
});


//get all user details
router.get("/all", async (req, res) => {
  await User.find({})
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
});

router.get('/search/:firstname',async (req,res)=>{
	await User.find({firstname:req.params.firstname}).then(data =>{
			res.status(200).send({data:data});
	}).catch(err=>{
			res.status(500).send({err: err.message});
	})
})

module.exports = router;