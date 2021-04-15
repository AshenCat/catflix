const express = require('express')
// const path = require('path');
const server = express.Router()
const multer = require('multer')
const Content = require('../models/content');
const {removeSymbolsAndTypeOfFileName} = require('./functions/functions');
const mongoose = require('mongoose');

const validTypes = [
    'image/jpeg', 
    'image/jpg', 
    'image/png', 
    'image/gif', 
    'image/x-icon', 
    'image/webp', 
    'image/svg+xml',
    'video/mp4',
    'video/webm',
];

const storage = multer.diskStorage({
    destination: './media/uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + removeSymbolsAndTypeOfFileName(file.originalname));
    }
})

const upload = multer({
    storage: storage,
    limits: {
        files: 1,
        fileSize: 1024 * 1024 * 4,
    },
    fileFilter: (req, file, cb)=>{
        // console.log(file)
         if (!req.user) {
            return cb(new Error('Unauthorized request!'), false);
        } else if(!validTypes.includes(file.mimetype)){
            return cb(new Error('File type error!'), false);
        } else if (!req.body.visibility) {
            return cb(new Error("Incomplete body request: missing visibility"), false);
        } else if (!req.body?.title || req.body.title.length < 3) {
            return cb(new Error("Incomplete body request: missing title"), false);
        } else if (!req.body?.tags === [] ||  !Array.isArray(req.body.tags)) {
            return cb(new Error('Incomplete body request: missing tags'), false);
        } 
        cb(null, true)
    }
}).single('file')

server.put("/", upload, (req,res,next)=> {
    //if user is logged in
    if (req.user) {
        if(req.file) {
            const newContent = {
                title: req.body.title,
                author: new mongoose.Types.ObjectId(req.user._id),
                file: {
                    filename: req.file.filename,
                    path: req.file.path
                },
                visibility: req.body.visibility,
                tags: req.body.tags
            }
            // actual save content
            Content.create(newContent, (err, doc) => {
                if (err) return next(err)
                res.json({
                    msg: 'A new meme is born',
                    payload: doc._id
                })
            })
        }
        else {
            console.log("route: no file")
            next(new Error('Incomplete body request: missing file'))
        }
    } //if user isn't logged in
    else {
        res.status(401);
        next(new Error('Unauthorized request!'));
    }
})

module.exports = server;