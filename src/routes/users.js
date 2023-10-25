import {Router} from "express";
import bcrypt from "bcrypt"
import {User} from "../models/user.js"; 


const router = Router();


router.get('/getUsers', async (req, res) => {
    const users = await User.find().select("-password")
    res.status(200).send(users);
});


router.post('/addUser', async (req, res) => {
    const newUser = new User(req.body)
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save()
    return res.status(201).send(newUser)
});


export default router