const express = require("express");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
const helmet = require('helmet');  
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs')
const path = require('path')

const userRoute = require('./routes/user.route');
const mediaRoute = require('./routes/media.route');
const config = require('./config/config')

const app = express();

const port = 7172;

mongoose.connect(config.db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
    }).then(()=>{
            console.log("Successfully connected to the database!");
        }, err=>{
            console.log("Err: ", err)
        })

let wstream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(express.json());
// app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: config.origin,
    credentials: true
}))
app.use(expressSession({
    secret: config.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 3 * 60 * 60 * 1000,
    },
}))
app.use(cookieParser(config.secret))
app.use(passport.initialize());
app.use(passport.session())
require('./config/passportConfig')(passport);
app.use(morgan('common', {stream: wstream}))
app.use(helmet());

app.use('/api/static', express.static('./media/generic'))
app.use('/api/user', userRoute)
app.use('/api/media', mediaRoute)



app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
})