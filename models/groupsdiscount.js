module.exports = (sequelize, DataTypes) => {
    const groupdiscount = sequelize.define('groupdiscount', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        university: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        intervals: {
            type: DataTypes.JSON,
            allowNull: false
        },
        invitee: {
            type: DataTypes.JSON,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return groupdiscount;
}