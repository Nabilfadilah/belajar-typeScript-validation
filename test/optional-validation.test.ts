import {z} from "zod"

describe('optional validation', () => {
    it('should can support optional validation', async () => {
       
        const registerSchema = z.object({
            username: z.string().email(),
            password: z.string().min(6).max(20),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100).optional()
        })    

        const request = {
            username: "nabil@gmail.com",
            password: "123456789",
            firstName: "Eldo",
            // lastName: "Bareto",
        }

        const result = registerSchema.parse(request)
        console.info(result)  
    })
})