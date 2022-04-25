const express = require("express")
const router = express.Router()
const {registerUser, loginUser, uploadPhoto, deletePhoto, uploadPost, uploadSingle, getAll} = require("../Controllers/mainController")
const {registerValidate} = require("../Middleware/validator");


router.post("/register", registerValidate, registerUser)
router.post("/login", loginUser)
router.post("/upload-photo", uploadPhoto)
router.post("/delete-photo", deletePhoto)
router.post("/upload-post", uploadPost)
router.get("/single/:_id", uploadSingle)
router.get("/", getAll)

module.exports = router