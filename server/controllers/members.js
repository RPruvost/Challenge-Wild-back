

const { send } = require('process');
const Member = require('../models/Member')

/**
 * Permet de récupérer tous les Memberes
 * @param {*} req 
 * @param {*} res 
 * @returns {JSON} Renvoie tous les Memberes
 */
 const getMembers = async (req, res) => {
    try {
        const Members = await Member.query()
            .select('member.*')
        return res.status(200).json(Members);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
  };

/**
 * Permet la création d'un membre
 * @param {*} req name {name: string}
 * @param {*} res 
 * @returns {JSON} Renvoie le nouveau membre créé
 */
 const createMember = async (req, res) => {

    const name = req.body.name;

    try{
        const nameAlreadyExist = await Member.query().findOne("name", name);

        if(nameAlreadyExist) {
            return res.status(400).send("Il éxiste déjà un membre utilisant ce nom")
        }
        const newMember = await Member.query()
            .insert({
                name: name
            });
            return res.status(200).json(newMember)
    } catch (e) {
        console.log(e)
        return res.status(500).send(e)
    }
}

module.exports = {
    createMember,
    getMembers
}