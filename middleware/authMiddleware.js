const jwt = require('jsonwebtoken')
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
         res.status(401).json({ message: 'Unauthorized' })
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token,token,process.env.ACCESS_TOKEN_SECRE,
        (err, decoded) => {
            if (err) return res.status(401).json({
                message:
                    'token is not Valid'
            })
            req.user = decoded
            next()
        }
        
        
    )
}
module.exports = verifyJWT