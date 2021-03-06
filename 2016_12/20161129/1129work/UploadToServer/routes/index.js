var express = require('express');
var router = express.Router();
var multer = require("multer");
var upload = multer({dest: "public/uploads"});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/upload", upload.single("anything"), function (req, res) {
    console.log(req.file);
    req.file.url = "uploads/" + req.file.filename;
    res.render("upload", {file: req.file});
});


module.exports = router;
