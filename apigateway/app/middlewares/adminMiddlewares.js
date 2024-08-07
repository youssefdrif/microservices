const axios = require("axios");

const adminMiddleware = async (req, res, next) => {
    try {
        const response = await axios.get("http://auth:8081/getRole", {
            headers: {
                Authorization: "Bearer " + req.headers?.authorization?.split(" ")[1]
            }
        });
        
        const role = response.data?.role;
        if (role == "admin") {
            return next();
        }
        return res.status(403).send('Forbidden');
    } catch (error) {
        console.log(error);
        res.status(401).send('Unauthorized');
    }
}

module.exports = adminMiddleware;