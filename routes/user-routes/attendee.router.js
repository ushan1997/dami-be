const express = require('express');
const router = express.Router();
const Attendee = require('../../models/users/attendee.js');

//add new attendee
router.post('/add', async (req, res) => {
    const attendee = new Attendee(req.body);
    await attendee.save()
        .then(data => {
            res.status(201).send({ data: data });
        })
        .catch(error => {
            res.status(400).send({ error: error.message });
        })
})

//get all attendee details
router.get('/all', async (req, res) => {
    await Attendee.find({})
        .then(attendees => {
            res.status(200).send({ data: attendees })
        }).catch(error => {
            res.status(400).send({ error: error.message })
        })

})

//attendee login
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await Attendee.findOne({ email: email, password: password }, (err, attendee) => {
        if (err) {
            console.log(err)
            return res.status(500).send({
                errors: err.message
            });
        }

        if (!attendee) {
            return res.status(404).send({
                message: 'email or password is mismatch!',
            });
        }

        return res.status(200).send({
            message: 'Login successfully'
        })
    })
})


module.exports = router;

