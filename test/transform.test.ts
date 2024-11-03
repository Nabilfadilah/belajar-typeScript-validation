import {date, z, ZodError, ZodObject} from "zod"

describe('Transform', () => {
    it('should can support transform', async () => {
       
        const schema = z.string().email("harus berformat email ya!").transform((data) => {
            return data.toUpperCase()
        })

        const result = schema.parse("Eldo@mail.unpas.ac.id")
        console.info(result)        
    })
})