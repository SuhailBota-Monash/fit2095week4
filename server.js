let express = require('express');
const morgan = require('morgan');
let bodyParser = require('body-parser');
let app = express();
let viewsPath = __dirname + "/views/";


//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let taskDb = [];
taskDb.push({
    taskName: 'Task1',
    taskDueDate: 2019-1-7,
    taskDescription: 'Build New Module'
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Setup the static assets directories
app.use(morgan('tiny'));
app.use(express.static('css'));
app.get('/', function (req, res) {
    res.render('index.html');
});
app.get('/', function (req, res) {
    res.render('index.html');
});
app.get('/newtask', function (req, res) {
    res.render('newtask.html');
});
app.post('/data', function (req, res) {
    console.log(req.body.taskName);
    console.log(req.body.taskDueDate);
    console.log(req.body.taskDescription);
    taskDb.push({
        taskName: req.body.taskName,
        taskDueDate: req.body.taskDueDate,
        taskDescription: req.body.taskDescription
    });
    res.render('newtask.html');
});
app.get('/listtasks', function (req, res) {
    res.render('listtasks.html', {listDb: taskDb});
});
app.listen(8080);