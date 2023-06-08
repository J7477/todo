const jwt = require('jsonwebtoken')
const JWT_SECRET = 'JWTTokenSignature'


const fetchuser = (req, res, next) => {

    //get user from JWT token 
    const token = req.header('authToken')
    if (!token) {
        res.status(401).send({ error: "Enter with valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Enter with valid token" })
    }
}


module.exports = fetchuser;