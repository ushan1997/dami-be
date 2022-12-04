const express = require("express");
const router = express.Router();
const ReviewerSchema = require("../../models/reviewer/reviewer");
const EditorSchema = require("../../models/Editor/Editor");
const AdminSchema = require("../../models/admin/Admin");

//add reviewer
router.post("/addreviewer", async (req, res) => {
  console.log("called");
  const { fullName, email, phoneNo, password } = req.body;
  console.log(fullName, email, phoneNo, password);
  const reviewer = new ReviewerSchema(req.body);
  await reviewer
    .save()
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(422).send({ err });
    });
});

//add editor
router.post("/addeditor", async (req, res) => {
  console.log("called");
  const { fullName, email, phoneNo, password } = req.body;
  console.log(fullName, email, phoneNo, password);
  const editor = new EditorSchema(req.body);
  await editor
    .save()
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(422).send({ err });
    });
});

router.post("/addAdmin", async (req, res) => {
  const admin = new AdminSchema(req.body);
  await admin
    .save()
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(422).send({ err });
    });
});

router.post("/adminlogin", async (req, res) => {
  const { email, password } = req.body;
  AdminSchema.findOne({ email: email }).then((existingadmin) => {
    if (!existingadmin) {
      return res.status(422).json({ error: "invalid email" });
    }
    if (password === existingadmin.password) {
      return res.status(200).json({ message: "successful" });
    } else {
      return res.status(422).json({ error: "invalid email & password" });
    }
  });
});

module.exports = router;
