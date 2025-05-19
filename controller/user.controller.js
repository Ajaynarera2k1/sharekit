import userModel from "../model/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {

      try{
                 const newUser = new userModel(req.body)
                  await  newUser.save()

                 res.status(200).json({
                 message: "signup successfull"
                  })
      }
      catch(err){
           res.status(500).json({
              message: err.message
           })
      }
       
}

export const login = async(req, res) => {
       try
          {
             const {email , password} = req.body
             const user = await userModel.findOne({email})

           

             if(!user)
                  return res.status(404).json({
                           message: "user not found please signup"
            })
          
            const isLogin = await bcrypt.compare(password , user.password)
             
            if(!isLogin)
                  return res.status(401).json({
                          message: "incorrect password"
                  })

              const payload = {
                        id :user._id,
                        fullname: user.fullname,
                        email: user.email,

              }    
               

              const token =   jwt.sign(payload , process.env.JWT_TOKEN , {
                   expiresIn: '7d'
              })  
                   console.log(token)
             res.status(200).json({
                  message: "login success",
                  token
             })     
          }

       catch(err){
            res.status(401).json({
                  message: "login failed"
            })
       }
}