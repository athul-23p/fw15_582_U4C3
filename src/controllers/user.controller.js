const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { validationResult } = require("express-validator");
const User = require('../models/user.model');
const generateToken = (user) => {
    return jwt.sign(user,process.env.SECRET);
}

const register = async(req,res) => {
    try {
     console.log(req.body);
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).send({errors:errors.array()});
     }
    //  console.log(req.files);
     let paths = req.files.map(el => el.path);
     console.log(paths);
     const user = await User.create({
         ...req.body,
         profileImages : paths
        })
    //  let token = generateToken(user);
     return res.status(401).send({user});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {register};
