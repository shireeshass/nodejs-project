var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("Hello bb");
});

app.use('/',router);

app.listen(3000);


