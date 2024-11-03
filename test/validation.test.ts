import {z, ZodError, ZodObject} from "zod"

describe('zod', () => {
    
    it('should support', async () => {
        const schema = z.string().min(3).max(100)
        
        const request = "eko"
        const result = schema.parse(request)
        
        expect(result).toBe("eko")
    })

    it('should support validate primitive data type', async () => {
        
        const usenameSchema = z.string().email()
        const isAdminSchema = z.boolean()
        const priceSchema = z.number().min(1000).max(1000000)

        const username = usenameSchema.parse("nabil@passmail.com")
        console.info("Email :", username)

        const isAdmin = isAdminSchema.parse(true)
        console.info("Aku adalah super hero :",isAdmin)

        const price = priceSchema.parse(20000)
        console.info("Rp.", price)
    })

    it('should support data conversion', async () => {
        
        const usenameSchema = z.coerce.string().min(3).max(100)
        const isAdminSchema = z.coerce.boolean()
        const priceSchema = z.coerce.number().min(1000).max(1000000)

        const username = usenameSchema.parse(3393939)
        console.info(username)

        const isAdmin = isAdminSchema.parse("true")
        console.info(isAdmin)

        const price = priceSchema.parse("20000")
        console.info(price)
    })

    it('should support date validation', async () => {
        const birthDateSchema = z.coerce.date().min(new Date(1980, 0, 1)).max(new Date(2020, 0, 1))

        const birthDate = birthDateSchema.parse("1990-01-01")
        console.info(birthDate)
        
        const birthDate2 = birthDateSchema.parse(new Date(1990, 1, 1))
        console.info(birthDate2)
    })

    // validation error - video 84
    it('should support zod error if invalid', async () => {
        
        const schema = z.string().email().min(3).max(100)

        try {
            schema.parse("el")
        } catch (err) {
            if (err instanceof ZodError) {
                console.error(err)
                // err errors.forEach((error) => {
                //     console.info(error.message)
                // })
            }
        }
    })

    it('should support zod error if invalid without exception', async () => {
        
        const schema = z.string().email().min(3).max(100)

        const result = schema.safeParse("Kaoka@gmail.com")

        if (result.success) {
            console.info(result)
        } else {
            console.info(result.error)
        }
    })
})