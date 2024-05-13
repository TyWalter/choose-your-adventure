// add a forgien key from user info to character 
const Login = require('./Login');
const Character = require('./Character');
const Stats = require('./Stats');

Login.hasMany(Character, {
    foreignKey: 'login_id',
});

Character.belongsTo(Login, {
    foreignKey: 'login_id',
});

Login.hasOne(Stats, {
    foreignKey: 'login_id',
});

Stats.belongsTo(Login, {
    foreignKey: 'login_id',
});

module.exports = { Stats, Character, Login };