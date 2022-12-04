const express = require('express');
const router = express.Router();
const Researcher = require('../../models/users/researcher.js');
const fileValidation = require('../../middlewares/file-upload/validation.js');
const multer = require('multer');

//file uploading filter file data
const fileFilter = (req, res, cb) => {
    cb(null, true)
}
const upload = multer({
    fileFilter: fileFilter
})

//add new researcher
router.post('/add', upload.single('uploads'), fileValidation, async (req, res) => {

    const fullName = req.body.fullName
    const email = req.body.email
    const password = req.body.password
    const phoneNo = req.body.phoneNo
    const approve = req.body.approve
    const uploads = req.file.buffer

    const reseacher = new Researcher({
        fullName: fullName,
        email: email,
        password: password,
        phoneNo: phoneNo,
        approve: approve,
        uploads: uploads
    });

    await reseacher.save((err, reseacher) => {
        if (err) {
            return res.status(400).send({
                errors: err.message
            });
        }

        return res.status(201).send({
            message: 'Registered successfully',
            reseacher
        })

    });

});

//get all researcher details
router.get('/all', async (req, res) => {
    await Researcher.find({})
        .then(reseachers => {
            res.status(200).send({ data: reseachers })
        }).catch(error => {
            res.status(400).send({ error: error.message })
        })
})

//researcher login
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await Researcher.findOne({ email: email, password: password }, (err, researcher) => {
        if (err) {
            console.log(err)
            return res.status(500).send({
                errors: err.message
            });
        }

        if (!researcher) {
            return res.status(404).send({
                message: 'email or password is mismatch!',
            });
        }

        return res.status(200).send({
            message: 'Login successfully',
            researcher
        })
    })
})

//show approval researchers
router.get('/approval/:id', async (req, res) => {
    if(req.params && req.params.id){
        Researcher.findById(req.params.id,'fullName email phoneNo uploads')
        .then(data => {
            res.status(200).send({ data: data })
        }).catch(error => {
            res.status(400).send({ error: error.message })
        })
    }
})

module.exports = router;