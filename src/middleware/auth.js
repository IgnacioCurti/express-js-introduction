import pkg from "jsonwebtoken";

const {verify} = pkg;

const jwtPrivateKey = "secretWord";

function auth(req, res, next){
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("Access denied. No token provided.")

    try {
        const decoded = verify(token, jwtPrivateKey);
        req.user = decoded;
        next();
    } catch {
        res.status(400).send("Invalid token.")
    }
}

export {auth as auth}
