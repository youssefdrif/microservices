const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
    const saltRounds = 10;

    try {
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    } catch (err) {
        console.error('Erreur lors du hachage du mot de passe:', err);
        throw err;
    }
}

async function checkPassword(password, hashedPassword) {
    try {
        const match = bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = { hashPassword, checkPassword };