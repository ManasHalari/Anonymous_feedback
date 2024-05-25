import { verify } from "crypto";
import mongoose,{Schema,Document} from "mongoose";

interface Message extends Document{
    message: string;
    createdAt:Date;
}

const messageSchema:Schema<Message>=new Schema({
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        required:true,
        default: Date.now
    }
})

interface User extends Document{
    username: string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessages:boolean;
    messages:Message[];
}

const userSchema:Schema<User>=new Schema({
    username: {
        type: String,
        required: [true,"username is required"],
        unique:true,
        trim:true
    },
    email: {
        type: String,
        required: [true,"email is required"],
        unique:true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true,"password is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verifyCode:{
        type:String,
        required:true
    },
    verifyCodeExpiry:{
        type:Date,
        required:true
    },
    isAcceptingMessages:{
        type:Boolean,
        default:true
    },
    messages:[messageSchema]
})

const User=(mongoose.models.User as mongoose.Model<User>) ||  mongoose.model<User>("User",userSchema)

export default User;
