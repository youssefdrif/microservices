const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(payload, expiresIn = '1h') {
    try {
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
        return token;
    } catch (error) {
        console.error('Erreur lors de la génération du token:', error);
        throw error;
    }
}

function decodeToken(token) {
    try {
        const payload = jwt.decode(token, JWT_SECRET);
        return payload;
    } catch (error) {
        console.error('Erreur lors du décodage du token: ', error);
        throw error;
    }
}

module.exports = { generateToken, decodeToken };