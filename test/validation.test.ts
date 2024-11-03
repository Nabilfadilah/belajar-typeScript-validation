import {z} from "zod"

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
})