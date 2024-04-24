"use strict";


exports.showHome = (req, res) => {
    res.render("index");
};
exports.showTransportation = (req, res) => { 
    res.render("transportation");
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUp = (req, res) => {
    res.render("thanks");
};