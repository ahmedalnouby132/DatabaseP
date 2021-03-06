const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/config')

const checkAuth = (req, res, next) => {
	var token = req.session.token.token;
	console.log(token)
	if (!token)
		return res.status(403).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, jwtSecret, (err, decoded) => {
		if (err)
			return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.user = {
			id: decoded.id,
			Occupation:decoded.Occupation
		};
    next();
	});
}

module.exports = checkAuth

