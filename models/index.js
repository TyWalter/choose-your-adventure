// add a foreign key from user info to character 
const Login = require('./Login');
const Character = require('./Character');
const Stats = require('./Stats');

Login.hasMany(Character);

Character.belongsTo(Login, {
    foreignKey: 'user_id',
});

Login.hasOne(Stats, {
    foreignKey: 'user_id',
});

Stats.belongsTo(Login);

// Character.findAll()
//     .then(character => {
//         console.log(character); // Log the retrieved users
//     })
//     .catch(error => {
//         console.error('Error retrieving users:', error);
//     });

// Login.findAll()
//     .then(login => {
//         console.log(login); // Log the retrieved users
//     })
//     .catch(error => {
//         console.error('Error retrieving users:', error);
//     });


// Stats.findAll()
//     .then(stats => {
//         console.log(stats); // Log the retrieved users
//     })
//     .catch(error => {
//         console.error('Error retrieving users:', error);
//     });

module.exports = { Stats, Character, Login };