const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
//add tables to seed here 

    process.exit(0);
};

seedAll();