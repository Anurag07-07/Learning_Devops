import express, { type Request, type Response } from 'express'
import rateLimit from 'express-rate-limit'
const app = express()

app.use(express.json())

//Interface for Object Type
interface OBJ{
  [key:string]:string
}

const otpStore:Record<string,string> = {}

// Rate limiter configuration
const otplimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // Limit each IP to 3 OTP requests per windowMs
  message: 'Too many requests, please try again after 5 minutes',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 password reset requests per windowMs
  message: 'Too many password reset attempts, please try again after 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});




app.post('/generate-otp',otplimiter,(req:Request,res:Response)=>{
  const {email} = req.body
  console.log(typeof email);
  
  if (!email) {
    return res.status(400).json({message:`Email is Required`})
  }

  const otp = Math.floor(100000+Math.random()*900000).toString()
  otpStore[email]=otp

  console.log(`OTP for ${email}: ${otp}`);
  res.status(200).json({
    message:`OTP is Generated`
  })
})

app.post('/reset-password',passwordResetLimiter,(req:Request,res:Response)=>{
  const {email,otp,newPassword} = req.body
  if (!email || !otp || !newPassword) {
    return res.status(400).json({
      message:`Email, OTP and new password are required`
    })
  }

  if (otpStore[email]===otp) {
    console.log(`Password for ${email} has been reset to :${newPassword}`);
    delete otpStore[email];
    res.status(200).json({message:`Password has been reset Successfully`})
  }else{
    res.status(401).json({message:`Invalid OTP`})
  }
})

app.listen(3000,()=>{
  console.log(`Server started at port  ${3000}`);
})