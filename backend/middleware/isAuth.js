import jwt from 'jsonwebtoken'
const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies
        console.log("Received token:", token);
        if (!token) {
            return res.status(400).json({ message: "user doesnot have a valid token" })
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!verifyToken) {
            return res.status(400).json({ message: "user doesnot have a valid token" })
        }
        console.log("Token verified, userId:", verifyToken.userId);

        req.userId = verifyToken.userId
        next();
    }
    catch (error) {
        console.log("isAuth Error")
        return res.status(500).json({ message: `isAuth Error ${error}` })
    }
}
export default isAuth

