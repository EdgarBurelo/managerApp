const db = require("../models");
const mailService = require('../mockUpMail/mailService');
const codeGenerator = require('../mockUpCode/codegen')

module.exports = {
    save: (req, res) => {
        db.groupdiscount.create(req.body).then(data => {
            res.json(data);
        });
    },

    closeActiveGroup: (req, res) => {
        db.groupdiscount.update({ status: 'Closed'}, {where: { id: req.params.groupId }});
        const code = codeGenerator.generateCode(req.params.groupId);
        db.groupdiscount.findAll({ where: {id: req.params.groupId }}).then(data => {
            const users = data[0].dataValues.invitee.users;
            const discount = data[0].dataValues.discount;
            users.forEach(user => {
                mailService.closeMail(user.name, discount, code);
            })
        });
    },

    findAll: (req, res) => {
        db.groupdiscount.findAll().then(data => {
            res.json(data);
        });
    },

    findOne: (req, res) =>  {
        db.groupdiscount.findAll({ where: {id: req.params.groupId }}).then(data => {
            res.json(data);
        });
    },

    saveNewUser: (req, res) => {
        mailService.sendMailToUser(req.body.user.mail, req.body.user.name, req.body.id)
        db.groupdiscount.findAll({
            where: {
                id: req.body.id
            }
        }).then(data => {
            const invitee = data[0].dataValues.invitee;
            const intervals = data[0].dataValues.intervals
            let actualUsers = [];
            if (invitee === null) {
                 actualUsers.push(req.body.user);
            } else {
                actualUsers = [...invitee.users];
                actualUsers.push(req.body.user);
            }

            handleInterval(intervals, actualUsers.length, req.body.id)

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
    }
};

const handleInterval = function (intervals, totalUsers, id) {
    let discount = '0';
    switch (true) {
        case (totalUsers < 10):
            discount = 0;
            break;
        case (totalUsers >= 10 && totalUsers < 20 ):
            discount = intervals['10+ people'];
            break;
        case (totalUsers >= 20 && totalUsers < 30):
            discount = intervals['20+ people'];
            break;
        case (totalUsers >= 30 && totalUsers < 50):
            discount = intervals['30+ people'];
            break;
        case (totalUsers >= 50):
            discount = intervals['50+ people'];
            break;
    }
    db.groupdiscount.update({ discount: parseInt(discount)}, {where: { id: id }});
}