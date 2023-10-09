import  jwt  from "jsonwebtoken";
export const authValider =(req,res,next)=>{
const {token} = req.cookies
console.log(token)
if (!token) return res.status(401).json({message:"no hay token "})
jwt.verify(token,"secreto",(err, user)=>{
    if (err) return res.status(401).json({message:"incalide token"})
    console.log(token)
    req.user = user
})

next();
}