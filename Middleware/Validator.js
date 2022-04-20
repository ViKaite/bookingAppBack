const validator = require("email-validator");

module.exports = {
    registerValidate: (req, res, next) => {
        const {email, passOne, passTwo} = req.body

        if (!validator.validate(email)) return res.send({success: false, message: "bad credentials"})
        if (passOne.length < 4 || passOne.length > 20) return res.send({success: false, message: "bad password1"})
        if (passTwo.length < 4 || passTwo.length > 20) return res.send({success: false, message: "bad password2"})

        next()
    },
}