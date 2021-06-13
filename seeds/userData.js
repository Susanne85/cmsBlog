const { User } = require('../models');

const userData = [
    {
        "username": "Susanne",
        "email": "xkq2020@gmail.com",
        "password": "password12345"
    },
    {
        "username": "Sue",
        "email": "sue@gmail.com",
        "password": "password12345"
    }
];
const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;