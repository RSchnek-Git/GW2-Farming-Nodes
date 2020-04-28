const cool = require('cool-ascii-faces')
const express = require('express'); //express
const app = express(); //app creation
const path = require('path');

const morgan = require('morgan'); //logging middleware
app.use(morgan('dev')); //app using middleware

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/cool', (req, res) => res.send(cool()))

const bodyParser = require('body-parser'); //allows req.body to be used
app.use(bodyParser.json()); //can parse json
app.use(bodyParser.urlencoded({ extended: true })); //can parse urls

app.use('/api', require('./api')); //makes any url with /api route to back end

//starts server on localhost:8080
const port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})

//serve up html if none of our routes get used *THIS SHOULD BE AT END OF FILE*
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//send 500 errors out and show error logs.
app.use(function(err, req, res, next){
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
})