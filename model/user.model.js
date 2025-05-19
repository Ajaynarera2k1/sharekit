import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
      
    fullname : {
             type: String,
             required:true,
             trim: true,
             lowercase:true
       },
        email : {
             type: String,
             required:true,
             trim: true,
             lowercase:true
       },
       password : {
             type: String,
             required:true,
            
       }
      


}, {timestamps:true})



// for checking unique email
userSchema.pre('save', async function(next) {
       const count = await model('User').countDocuments({email: this.email})
       
       if(count)
             throw next( new Error("please enter new Email"))
        next()    
})


// for encrypting data
userSchema.pre('save', async function(next) {
          const encrypted = await bcrypt.hash(this.password.toString(), 12)
          this.password = encrypted
          next()
})

const userModel = model('User', userSchema )



export default userModel;