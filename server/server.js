/*


POST  /login

GET   /videos/
GET   /videos/:userId -> admin
POST  /videos/ {}
PUT   /videos/:videoId


*/


let express = require('express');
let app = express();
const port = 8000
let bodyParser = require('body-parser')
let mongo = require('mongodb');
let trainwise, users;

mongo.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(`Error connecting to db [err=${err}]`);
    return;
  }

  app.listen(port, () => console.log(`app listening on port ${port}!`))
  trainwise = client.db('trainwise');
  users = trainwise.collection('users');



});



app.use(express.static('../client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/login',  (req, res,next) => {

    users.find({email: req.body.email, password: req.body.password}).toArray((err, result) => {

        if (err || result.length < 1) {
            res.sendStatus(401);
            return;
        }

        res.redirect('/index.html')


    });
})


app.get('/videos', function (req, res) {
    res.send('Got a get request for videos')
})

app.get('/videos/:userId', function (req, res) {
    res.send('Got a get request for videos from admin')
})

app.post('/videos/:userId', function (req, res) {
    res.send('Got a POST request for videos from user')
})

app.put('/videos/:videoID', function (req, res) {
    res.send('Got a put request for videos from admin')
})





// app.listen(8000, () => console.log('listening on 8000...'));

// app.get('/', (req, res) => res.send('Hello World!'))