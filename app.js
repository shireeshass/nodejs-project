var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res) {
    res.send("Hello blueberry123456789");
});

app.use('/',router);

app.listen(3000);


