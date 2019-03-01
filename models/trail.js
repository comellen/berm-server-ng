module.exports = (sequelize, DataTypes) => {
    return sequelize.define('trail', {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        length: DataTypes.DECIMAL,
        difficulty: DataTypes.ENUM('', 'Easy', 'Intermediate', 'Advanced', 'Most Advanced'),
        completed: DataTypes.ENUM('', 'Yes', 'No'),
        date: DataTypes.STRING,
        notes: DataTypes.TEXT,
        owner: DataTypes.INTEGER
    });
}