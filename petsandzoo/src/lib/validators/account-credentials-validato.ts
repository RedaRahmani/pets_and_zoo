import { z } from "zod"

//validation

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'password must be at least 8 characters long.',
    })
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>