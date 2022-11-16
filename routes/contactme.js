"use strict";
const express = require("express");
let router = express.Router();

router
    .route("/contactmeupload")
    .get((req,res) => {
        res.send("hi get /contactme/contactmeupload");
    })
    .post((req,res) => {
        res.send("hi post /contactme/contactmeupload")
    })

module.exports = router;