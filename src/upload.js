const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../uploads/'));
  },
  filename: function (req, file, cb) {
    // console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.fieldname);
  },
});

const fileFilter = (req,file,cb)=>{
    if(file.mimetype=='image/jpeg' || file.mimetype == 'image/png'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

const uploads = multer({
    storage,
    fileFilter
});

module.exports = uploads;