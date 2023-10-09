import User from '../models/user.model.js'
import {tokenCreate} from '../lib/jwt.js'
import bcrypt from 'bcryptjs'

export const login = async (req, res) => {
    const { email, password,  } = req.body
    try {
        const userFind = await User.findOne({email})
        if(!userFind)return  res.status(400).json({message :"usuario no encontrado"}) 
        const coinside = await bcrypt.compare(password, userFind.password)
        if(!coinside) return res.status(400).json({message: "datos incorrectos"})
       
       
        const token = await tokenCreate({ id: userFind._id })
        res.cookie('token', token)
        console.log(token)
        res.json({
            email: userFind.email,
            name: userFind.username,
            id: userFind._id
        })
    } catch (error) {
        console.log(error)
    }
};

export const register =async (req , res) =>{
    const { username, usereamil, password, email } =req.body
    try {
        const passhash=await bcrypt.hash(password,10)
        const newUser = new User({
            username,
            usereamil,
            email,
            password : passhash,
        })

        console.log(newUser)
        const userSave =await newUser.save()
        const token= await tokenCreate  ({id: userSave._id}) 
        res.cookie('token', token)
        res.json({
            email: userSave.email,
            name:userSave.username,
            id: userSave._id
        })
    } catch (error) {
        console.log(error)
    }
};
export const logout = (req, res) => { 
    res.cookie('token',"", {
        expires: new Date(0), 
    });
    return res.sendStatus(200);
}
export const profile = async (req, res) => {
    const userfind = await User.findById(req.user.id)
    if (!userfind) return res.status(404).json({message:"no encontrado"})
    return res.json({
        User:userfind.name,
        email : userfind.email
    })
}

