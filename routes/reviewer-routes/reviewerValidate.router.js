const express = require('express')
const router = express.Router();
const ResercherModel = require('../../models/reviewer/reviewer')

router.post('/register',async (req, res) => {

    const research = new ResercherModel(req.body);
    await research.save().then((data) =>{
        res.status(200).send({data: data});
    }).catch((err) =>{
        res.status(500).send({err:err.message});
    })
})

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await ResercherModel.findOne({ email: email, password: password }, (err, research) => {
        if(err){
            console.log(err)
            return res.status(500).send({
                errors:err.message
            });
        }

        if(!research){
            return res.status(404).send({
                message:'email or password is mismatch!',
            });
        }

        return res.status(200).send({
            message:'Login successfully'
        })
    })
})

module.exports = router;