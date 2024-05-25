import {z} from "zod"

export const messageValidation=z.object({
    isActiveMessages:z
    .boolean()
})