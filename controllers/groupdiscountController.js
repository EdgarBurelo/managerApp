const db = require("../models");

module.exports = {
    save: (req, res) => {
        console.log(req.body);
        db.groupdiscount.create(req.body).then(data => {
            res.json(data);
        });
        // res.json({ "hola": "hola" })
    },

    findAll: (req, res) => {
        db.groupdiscount.findAll().then(data => {
            res.json(data);
        });
    },

    
};