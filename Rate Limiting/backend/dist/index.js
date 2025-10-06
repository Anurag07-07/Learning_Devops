import express, {} from 'express';
const app = express();
app.use(express.json());
const otpStore = {};
app.post('/generate-otp', (req, res) => {
    const { email } = req.body;
    console.log(typeof email);
    if (!email) {
        return res.status(400).json({ message: `Email is Required` });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`);
    res.status(200).json({
        message: `OTP is Generated`
    });
});
app.post('/reset-password', (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        return res.status(400).json({
            message: `Email, OTP and new password are required`
        });
    }
    if (otpStore[email] === otp) {
        console.log(`Password for ${email} has been reset to :${newPassword}`);
        delete otpStore[email];
        res.status(200).json({ message: `Password has been reset Successfully` });
    }
    else {
        res.status(401).json({ message: `Invalid OTP` });
    }
});
app.listen(3000, () => {
    console.log(`Server started at port  ${3000}`);
});
//# sourceMappingURL=index.js.map