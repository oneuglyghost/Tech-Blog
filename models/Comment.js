const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const Comment = Sequelize.define("Comment", {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Comment;
}