import {z} from "zod"

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

export const SignUpValidation=z.object({
    email:emailValidation,
    password:passwordValidation
})
