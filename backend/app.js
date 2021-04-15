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
const path = require('path');
const multer = require('multer');

const userRoute = require('./routes/user.route');
const contentRoute = require('./routes/content.route');
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
app.use(cookieParser())
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
app.use('/api/content', contentRoute)

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        switch(err.code){
            case 'LIMIT_FILE_SIZE':
                res.status(400).json({
                    msg: "File size too big",
                    stack: process.env.NODE_ENV === "development" ? err.stack : null
                })
                break;
            case 'LIMIT_FILE_COUNT':
                res.status(400).json({
                    msg: "File count exceeded",
                    stack: process.env.NODE_ENV === "development" ? err.stack : null
                })
                break;
            default: 
                console.error(err)
                res.status(500).json({
                    msg: "Unknown error while uploading file.",
                    stack: process.env.NODE_ENV === "development" ? err.stack : null
                })
        }
    } else if (err) {
        // When there's an error somewhere
        // Check statuscode
        // May add more
        const listOfBadReqErrs = [
            'File type error!', 
            'Incomplete body request: missing visibility',
            'Incomplete body request: missing title',
            'Incomplete body request: missing tags',
            'Incomplete body request: missing file'
        ];
        if (res.status() === 401) {
            res.json({
                msg: err,
                stack: process.env.NODE_ENV === "development" ? err.stack : null
            })
            // Multer filefilter errors
        } else if (err.message === "Unauthorized request!") {
            res.status(401).json({
                msg: 'Unauthorized request',
                stack: process.env.NODE_ENV === "development" ? err.stack : null
            })
        } else if (listOfBadReqErrs.includes(err.message)) {
            res.status(400).json({
                msg: err.message,
                stack: process.env.NODE_ENV === "development" ? err.stack : null
            })
        }
        else 
            res.status(500).json({
                msg: "Unknown error",
                stack: process.env.NODE_ENV === "development" ? err.stack : null
            })
    }
    else {
        // No error, but the route doesn't exist
        console.info("route not found")
        res.status(301).redirect('/404');
    }
})

app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
})