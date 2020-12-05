const axios = require('axios');

const baseUrl = `https://rickandmortyapi.com/api`

const controllers = {
    home: async (req, res) => {
        res.render('welcome')
    },

    searchCharacter: async (req, res) => {
        try {
            const { searchName } = req.body;
            let character = await axios.get(baseUrl + '/character/' + `?name=${searchName}`);
            let info = character.data.results;
            console.log(info);
            res.render('character', { info });

        } catch (e) {
            console.error(e);
        }
    },

}
module.exports = controllers;