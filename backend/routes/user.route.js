const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user')
const saltRounds = 10;

const server = express.Router()

function isValid(str){
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]\s/g.test(str);
   }


server.route('/')
    .put((req, res, next)=>{
        /*
            REMINDER: VALIDATION
        */
        if (req.body.username.length < 6 || req.body.username > 18 || !isValid(req.body.username)){
            res.json({msg: 'Username validation failed!', payload: 'username'})
        }
        else if (req.body.password.length < 6 || req.body.password > 18 || !isValid(req.body.password)){
            res.json({msg: 'Password validation failed!', payload: 'password'})
        }
        else
            User.findOne({username: req.body.username}, (err, doc) => {
            if(err) {
                res.status(500);
                next(err);
            }
            else {
                if (doc) res.json({msg: "Username already taken!", payload: 'username'});
                else {
                    bcrypt.genSalt(saltRounds, (err, salt) => {
                        if(err) {
                            res.status(500);
                            next(err);
                        }
                        else bcrypt.hash(req.body.password, salt, (err, hash) => {
                            if(err) {
                                res.status(500);
                                next(err);
                            }
                             else {
                                let user = {
                                    username: req.body.username,
                                    password: hash,
                                    access: req.user === "admin" ? req.body.access : "user",
                                }
                                User.create(user, (err, doc) => {
                                    if(err) {
                                        res.status(500);
                                        next(err);
                                    }
                                    else res.json({msg: "User successfully created!", payload: {...user, password: undefined}});
                                })
                            }
                        })
                    })
                }
            }
        })
    })
    .post((req, res) => {
        if(req.user) console.log("Auth success");
        if(!req.user) res.json(null)
        else res.json({
            username: req.user.username,
            access: req.user.access,
            avatar: req.user.avatar,
            quote: req.user.quote,
            createdAt: req.user.createdAt,
            updatedAt: req.user.updatedAt,
        })
    })

server.route('/logout')
    .get((req, res) => {
        req.logOut();
        res.json({msg: `Successfully logged out`})
    })
    
server.route('/login')
    .post((req, res ,next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                res.status(500)
                next(err)
            }
            if (!user) res.json({msg: "User not found"})
            else {
                req.logIn(user, err => {
                    if (err) throw err;
                    else {
                        res.json({
                            msg: "Successfully logged in!",
                            payload: {
                                username: user.username,
                                access: user.access,
                                avatar: user.avatar,
                                quote: req.user.quote,
                                createdAt: user.createdAt,
                                updatedAt: user.updatedAt,
                            }
                        })
                    }
                })
            }
        })(req,res,next)
    })

module.exports = server;