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

    findOne: (req, res) =>  {
        console.log(req.params.groupId)
        db.groupdiscount.findAll({ where: {id: req.params.groupId }}).then(data => {
            res.json(data);
        });
    },

    saveNewUser: (req, res) => {
        console.log(req.body);
        db.groupdiscount.findAll({
            where: {
                id: req.body.id
            }
        }).then(data => {
            let invitee = data[0].dataValues.invitee;
            let actualUsers = [];
            if (invitee === null) {
                 actualUsers.push(req.body.user);
            } else {
                actualUsers = [...invitee.users];
                actualUsers.push(req.body.user);
            }

            db.groupdiscount.update({
                invitee: {"users": actualUsers}
            }, {
                where: {
                    id: req.body.id
                }
            }).then(data => {
                res.json(data);
            })
        });

        // res.json({ "hola": "hola" })
        // db.groupdiscount.update({
        //     invitee
        // }, {
        //     where: {
        //         id: req.body.id
        //     }
        // });
    }
};