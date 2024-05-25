import {z} from "zod"

export const VerifyValidation=z.object({
    code:z
    .string()
    .length(6,{
        message:"OTP must be of 6 digits"
    })
})
