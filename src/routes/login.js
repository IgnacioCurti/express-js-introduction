import {Router} from 'express';
import bcrypt from 'bcrypt';
import {User} from '../models/user.js';


const router = Router();

router.post('/', async (req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if (!existingUser) return res.status(400).send('Invalid email or password');
        const validPassword = await bcrypt.compare(req.body.password, existingUser.password);
        if (!validPassword) return res.status(400).send('Invalid email or password');
        const token = existingUser.generateAuthToken();
        res.send({
            id: existingUser.id,
            name: existingUser.name,
            isAdmin: existingUser.isAdmin,
            jwt: token
        });
    } catch(e){
        res.status(500).send(e.message);
    }
});


export default router;