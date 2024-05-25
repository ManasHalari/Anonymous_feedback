import {z} from "zod"

export const messageValidation=z.object({
    content:z
    .string()
    .min(3,"Minimum 3 character are required")
    .max(300,"Maximum 300 character are allowed")
})
    
