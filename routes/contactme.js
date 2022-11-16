"use strict";
const express = require("express");
let router = express.Router();

router
    .route("/contactmeupload")
    .get((req,res) => {
        res.send("hi get /contactme/contactmeupload");
        req.assert("name", "Name is required").notEmpty()
        req.assert("email", "Email is required").isEmail()

        var errors = req.validationErrors()
        
    })
    .post((req,res) => {
        res.send("hi post /contactme/contactmeupload")
    })

module.exports = router;