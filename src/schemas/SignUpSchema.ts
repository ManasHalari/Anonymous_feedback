import {z} from "zod"

const usernameValidation=z
    .string()
    .min(3,"Minimum 3 character are required")
    .max(30,"Maximum 30 character are allowed")
    .trim()
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');  

const emailValidation=z
    .string()
    .email();

const passwordValidation=z
    .string()
    .min(8,{
        message:"Password at least contain 8 letters"
    })
    .max(20,{
        message:"Password at most contain 20 letters"
    })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,{
        message:"at least 8 characters and must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number and  Can contain special characters"
    })

export const SignInValidation=z.object({
    username:usernameValidation,
    email:emailValidation,
    password:passwordValidation
})
