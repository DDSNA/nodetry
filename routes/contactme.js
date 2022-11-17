"use strict";
const express = require("express");
const send = require("send");
let router = express.Router();

router
    .route("/contactmeupload")
    .get(async (req,res) => {
        res.send("hi get /contactme/contactmeupload");
        req.assert("name", "Name is required").notEmpty()
        req.assert("email", "Email is required").isEmail()

        res.sendFile(__dirname + "/index.html")
        if (err) {
            res.status(400).send("error fetching name")
        } else {
            res.json(result);
        }

    })
    .post((req,res) => {
        res.send("hi post /contactme/contactmeupload")
        let info = new info
    })

module.exports = router;