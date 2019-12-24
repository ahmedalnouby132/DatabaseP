const uploadApp = require("express").Router();
const {upload} = require("../../util/upload")
uploadApp.get('/upload',(req,res)=>{
    res.render("./index")
})
uploadApp.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if(err){
        res.render('index', {
          msg: err
        });
      } else {
        if(req.file == undefined){
          res.render('index', {
            msg: 'Error: No File Selected!'
          });
        } else {
          res.render('index', {
            msg: 'File Uploaded!',
            file: `uploads/${req.file.filename}`
          });
        }
      }
    });
  });
  
  module.exports=uploadApp