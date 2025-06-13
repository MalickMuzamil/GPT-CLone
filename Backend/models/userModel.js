import mongoose, { Schema } from 'mongoose'

const NewUser = new Schema({
    email: { type: String, default: "", required: true },
    password: { type: String, default: "", required: true }
})

const User = mongoose.model("NewUser", NewUser);
export default User;
