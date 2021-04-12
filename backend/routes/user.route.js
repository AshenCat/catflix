const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');
const { isUsernameValid, isPasswordValid, isEmailValid} = require('./functions/functions')

const saltRounds = 10;

const server = express.Router()



server.route('/')
    .put((req, res, next)=>{
        /*
            REMINDER: VALIDATION
        */
        if(!isUsernameValid(req.body.username)) {
            res.json({msg: "Failed to create user", payload: "invalid username"});
        }
        else if (!isPasswordValid(req.body.password)) {
            res.json({msg: "Failed to create user", payload: "invalid password"})
        }
        else if (!isEmailValid(req.body.email)) {
            res.json({msg: "Failed to create user", payload: "invalid email"})
        }
        else 
            User.findOne().or([{username: req.body.username}, {email: req.body.email}])
                .then(user => {
                    // console.log(user)
                    if (user?.username === req.body.username) res.json({msg: "Failed to create user", payload: 'username already taken'});
                    else if (user?.email === req.body.email) res.json({msg: "Failed to create user", payload: 'email already taken'})
                    else {
                        bcrypt.genSalt(saltRounds, (err, salt) => {
                            if (err) {
                                res.status(500);
                                next(err);
                            }
                            bcrypt.hash(req.body.password, salt, (err, hash) => {
                                if (err) {
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
                });
    })
    .post((req, res) => {
        // if(req.user) console.log("Auth success");
        if(!req.user) res.json(null)
        else res.json({
            username: req.user.username,
            authenticated: true,
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
        console.log("user logged out");
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
                                email: user.email,
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