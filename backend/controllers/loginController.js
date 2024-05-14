import User from '../models/register.js'
import authhelper from '../helpers/auth.js'
import jwt from 'jsonwebtoken'

const { hashPassword, comparePassword } = authhelper;



const loginUser = async (req, res) => {
    try{
        const{email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error : 'No user Found email'
            })
        }

        const match = await comparePassword(password, user.password)
        if(match){
            console.log('......')
            jwt.sign({email: user.email, id: user._id, firstName: user.firstName, lastName: user.lastName}, process.env.JWT_SECRET, {}, (err, token) =>{
                if(err) throw err;
                res.cookie('token', token).json(user);
            })
        }
        if(!match){
            res.json({error:'password do not match'})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default {loginUser}

