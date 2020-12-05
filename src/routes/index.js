// ! Importing modules:
const express = require('express')
const route = express.Router();

// you can add every method that you require:
const { home, searchCharacter} = require('../controllers/main')

//routes go below:
route.get('/', home);
route.post('/search-character', searchCharacter);

// export:
module.exports = route;