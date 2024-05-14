import User from '../models/register.js'
import authhelper from '../helpers/auth.js'
import jwt from 'jsonwebtoken'

const { hashPassword, comparePassword } = authhelper;

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, role, email, password, confirmPassword } = req.body;
        // console.log(req.body)
    
        if (!firstName) {
            return res.json({ error: 'First name is required' });
        }
    
        if (!lastName) {
            return res.json({ error: 'Last name is required' });
        }
    
        if (!password || password.length < 4) {
            return res.status(400).json({ error: 'Password requires at least 4 characters' });
        }
        
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
    
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }
        console.log("----------------------")
        console.log(email);
        console.log("----------------------")
        const hashedPassword = await hashPassword(password)
        const user = new User({ firstName, lastName, role, email, password:hashedPassword, confirmPassword:hashedPassword });
        const newuser = await user.save();
        // console.log(newuser);
        return res.json(newuser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



const loginUser = async (req, res) => {
    try{
        const{email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error : 'No user Found'
            })
        }

        const match = await comparePassword(password, user.password)
        if(match){
            jwt.sign({email: user.email, id: user._id, firstName: user.firstName, lastName: user.lastName}, process.env.JWT_SECRET, {}, (err, token) =>{
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if(!match){
            res.json({error:'password do not match'})
        }

    }catch(error){
        console.log(error)
    }
}

const getProfile = (req,res) => {
    const{token} =req.cookies
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }
}



export default { test , registerUser, loginUser, getProfile };
