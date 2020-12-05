const axios = require('axios');

const baseUrl = `https://rickandmortyapi.com/api`

const controllers = {
    home: async (req, res) => {
        try {
            let characterHome = await axios.get(baseUrl + '/character');
            let characterArray = characterHome.data.results;
            for (let i = 0; i <= 13 ; i++){
                characterArray.pop();
            }
            res.render('welcome', { characterArray });
            
        } catch (e) {
            console.error(e)
       }
    },

    searchCharacter: async (req, res) => {
        try {
            const { searchName } = req.body;
            let character = await axios.get(baseUrl + '/character/' + `?name=${searchName}`);
            let info = character.data.results;
            res.render('character', { info });

        } catch (e) {
            console.error(e);
        }
    },

}
module.exports = controllers;