import User from '../models/register.js'
import authhelper from '../helpers/auth.js'
import jwt from 'jsonwebtoken'

const { hashPassword, comparePassword } = authhelper;

export default async function loginUser (req, res){
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
            jwt.sign({email: user.email, id: user._id, firstName: user.firstName}, process.env.JWT_SECRET, {}, (err, token) =>{
                if(err) throw err;
                res.cookie('token', token).json(user);
            })
        }
        if(!match){
            res.json({error:'password do not match'})
        }

    }catch(error){
        console.log(error)
    }
}

