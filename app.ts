import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

// import the API routes
import posts from './routes/posts'

//add the application context
var app = express();

//make connection to the database
mongoose.connect('mongodb://admin:admin@ds151431.mlab.com:51431/thatroom');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', posts);

app.get('/*', (req, res, next) => {
    res.sendFile('/public/index.html')
});

export = app;
