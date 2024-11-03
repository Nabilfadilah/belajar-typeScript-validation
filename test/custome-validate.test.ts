import {z, ZodError, ZodObject} from "zod"

describe('custome validate message', () => {
    it('should support', async () => {
       
        const loginSchema = z.object({
            username: z.string().email("Username harus email!"),
            password: z.string().min(6, "password min harus 6 karakter").max(20, "password max harus 20 karakter")
        })

        const request = {
            username: "nabil@gmail.com",
            password: "123456789",
            ignore: "ignore"
        }

        try {
            const result = loginSchema.parse(request)
            console.info(result)  
        } catch (err) {
            console.error(err)
        }

    })
})