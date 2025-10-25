import bcrypt from 'bcrypt';
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type: String,
        required: [true, 'User name is required'],
    },
    email: {
        type: String,
        required: [true, 'User email is required!'],
    },
    password: {
        type: String,
        required: [true, 'User password is required!'],
    }
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
})

const User = model('User', userSchema);

export default User;