const { Sequelize, DataTypes } = require("sequelize");

module.export = (Sequelize, DataTypes) =>{
    const Post = Sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Post;
};