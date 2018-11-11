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

app.use(express.static('../client'));

app.use(bodyParser.json());

app.post('/login',  (req, res,next) => {
    res.send(`Got a POST request for login with age of: ${req.body.age} and name of ${req.body.name} `);
    next();
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



app.listen(port, () => console.log(`app listening on port ${port}!`))


// app.listen(8000, () => console.log('listening on 8000...'));

// app.get('/', (req, res) => res.send('Hello World!'))