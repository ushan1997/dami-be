const express = require('express')
const router = express.Router();
const Researcher = require('../../models/users/researcher.js');
const workshopConductor = require('../../models/users/workshopConductor');
const researchApproval = require('../../models/reviewer/researchPaperApproval');
const workShopApproval = require('../../models/reviewer/workshopPaperApproval');
const fileValidation = require('../../middlewares/file-upload/validation.js');
const multer = require('multer');

const fileFilter = (req,res,cb)=>{
    cb(null,true)
}
const upload = multer({
    fileFilter:fileFilter
})

router.get('/getResearchPapers',async(req, res)=>{
    await Researcher.find({}).then(data=>{
        res.status(200).send({data: data});
    }).catch(err=>{
        res.status(500).send({err: err.message});
    })
})

router.post('/approvedResearchers',upload.single('content'),async(req,res)=>{

    const researchersfullName = req.body.researchersfullName
    const researchersemail = req.body.researchersemail
    const researchersphoneNo = req.body.researchersphoneNo
    const content = req.body.content

    const Approval = new researchApproval({
        researchersfullName : researchersfullName,
        researchersemail :  researchersemail,
        researchersphoneNo :researchersphoneNo,
        content : content
    });
    await  Approval.save().then((data)=>{
        res.status(200).send({data: data});
    }).catch((err)=>{
        res.status(500).send({err: err.message})
    })
})

router.get('/getworkshopPapers',async(req, res)=>{
    await workshopConductor.find({}).then((data)=>{
        res.status(200).send({data: data});
    }).catch((err)=>{
        res.status(500).send({err: err.message});
    })
})

router.post('/approvedWorkshops',async(req, res)=>{
    if(req.body){
        const workshopPaperApproval = new workShopApproval(req.body);
        workshopPaperApproval.save().then((data)=>{
            res.status(200).send({data: data});
        }).catch((err)=>{
            res.status(500).send({err: err.message});
        })
    }
})

router.get('/getResearch/:id',async(req, res)=>{
    await Researcher.findById(req.params.id).then(data=>{
        res.status(200).send({data: data});
    }).catch(err=>{
        res.status(500).send({err: err.message});
    })
})

router.get('/getWorkshops/:id',async(req, res)=>{
    await workshopConductor.findById(req.params.id).then(data=>{
        res.status(200).send({data: data});
    }).catch(err=>{
        res.status(500).send({err: err.message});
    })
})

router.delete('/deleteResearch/:id',async (req,res)=>{
    if(req.params.id){
        await Researcher.findByIdAndDelete(req.params.id)
        .then(data =>{
            res.status(200).send({data: data});
        }).catch(err =>{
            res.status(500).send({err: err.message})
        })    
    }
})

router.delete('/deleteWorkshops/:id',async (req,res)=>{
    if(req.params.id){
        await workshopConductor.findByIdAndDelete(req.params.id)
        .then(data =>{
            res.status(200).send({data: data});
        }).catch(err =>{
            res.status(500).send({err: err.message})
        })    
    }
})
router.get('/getApprovedRe',async (req,res)=>{
    await researchApproval.find({}).then(data =>{
        res.status(200).send({data: data})
    }).catch(err =>{
        res.staus(500).send({err: err.message})
    })
})

//find the not approved posts 
router.get('/notApprovedResearch',async (req,res)=>{
    await Researcher.find({approve:false}).then(data =>{
        res.status(200).send({data: data})
    }).catch(err =>{
        res.status(500).send({err: err.message})
    })
}) 
router.get('/notApprovedWorkshop',async (req,res)=>{
    await workshopConductor.find({approve:false}).then(data =>{
        res.status(200).send({data: data})
    }).catch(err =>{
        res.status(500).send({err: err.message})
    })
}) 

router.put('/approveResearch/:id',async (req,res)=>{
    await Researcher.findByIdAndUpdate(req.params.id,{$set:{approve:true}},{useFindAndModify:false})
    .then(data =>{
        res.status(200).send({data:data});
    }).catch(err =>{
        res.status(500).send({err: err.message})
    })
})

router.put('/approveWorkshop/:id',async(req,res)=>{
    await workshopConductor.findByIdAndUpdate(req.params.id,{$set:{approve:true}},{useFindAndModify:false})
    .then(data=>{
        res.status(200).send({data: data});
    }).catch(err=>{
        res.status(500).send({err: err.message})
    })
})

router.get('/approvEDResearches',async (req,res)=>{
    await Researcher.find({approve:true}).then(data =>{
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send({err: err.message});
    })
})


router.get('/approvEDWorkshopes',async (req,res)=>{
    await workshopConductor.find({approve:true}).then(data =>{
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send({err: err.message})
    })
})

router.get('/sendNotifications/:id',async(req, res)=>{

})
module.exports = router;
