module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ride', {
        trail: DataTypes.STRING,
        location: DataTypes.STRING,
        bike: DataTypes.STRING,
        time: DataTypes.STRING,
        date: DataTypes.STRING,
        notes: DataTypes.TEXT,
        owner: DataTypes.INTEGER
    });
}