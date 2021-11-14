const jwt = require('jsonwebtoken');
const JWT_SECRET = "Mohitisagood$boy";

const fetchhospital = (req, res, next) => {
    // Get user from the jwt token and append and id to req oobject
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate using a valid token!'});
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.hosUser = data.hosUser;
        next(); 
    }
    catch(error){
        res.status(401).send({error: 'Please authenticate using a valid token!'});
    }
}

module.exports = fetchhospital;