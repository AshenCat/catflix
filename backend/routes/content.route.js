const express = require('express')
const path = require('path');
const server = express.Router()
const multer = require('multer')

let storage = multer.diskStorage({
    destination: './media',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    }
}).single('file')

server.route('/memes')
    .put((req, res, next)=> {
        upload(req, res, (err) => {
            if (err) {
                next(err)
            }
            
        })
    })

module.exports = server;