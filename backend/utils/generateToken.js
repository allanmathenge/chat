import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevent XSS cross site scripting attacks
        sameSite: "strict", // CSRF Cross Site Request Forgery
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndSetCookie;
