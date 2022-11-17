"use strict";
const express = require("express");
let send = require("send");
let router = express.Router();
const dbConnect = dbo.getDb();

router
    .route("/contactmeupload")
    .get(async (req,res) => {
        dbConnect.collection("contactmeinfo")
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