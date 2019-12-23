const tokens = require('../../Database/models/token')

const addToken = token => tokens.create(token);
const getTokensByID = id => tokens.findOne({where: {"ID": id},raw: true});
const getValidToken = id=> tokens.findOne({where: {"ID": id},raw: true});
module.exports = {
	addToken,
    getTokensByID,
    getValidToken
}