
import {Router} from 'express';

const router = Router();

import { 
    registerUser,
    deleteUser
} from '../controllers/user.controller.js';


// user routes


router.route('/register').post(registerUser)
router.route('/deleteuser/:id').delete(deleteUser)




export default router;
