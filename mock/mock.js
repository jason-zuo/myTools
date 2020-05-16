var express = require("express")
var app = express();
var bodyParser = require('body-parser');
var Mock = require('mockjs');

app.use(bodyParser.json());                 //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

var router = express.Router();

router.use("/api/list", function (req, res) {
    console.log(req.body);
    var data = Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        }
    );
    return res.json(data);
});

app.use(router);
app.listen(1995);
