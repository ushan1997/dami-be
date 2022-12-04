 module.exports = (req,res,next) =>{

    if(typeof(req.file)==='undefined' || typeof(req.body) === 'undefined'){

        return res.status(400).send({
            errors: 'Problem with sending data'
        })
    }
    
    //check type of file
    if(!(req.file.mimetype).includes('pdf') && !(req.file.mimetype).includes('docx') && !(req.file.mimetype).includes('doc')
     && !(req.file.mimetype).includes('pptx') && !(req.file.mimetype).includes('ppt') && !(req.file.mimetype).includes('png')){
        return res.status(400).send({
            errors:'File type is not support'
        })
     }
     
     //check file size 3MB
     if(req.file.size>1024*1024*3){
        return res.status(400).send({
            errors:'File is too large'
        })
     }
     
     
     next();
}