import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import cors from '@fastify/cors';
import { z } from "zod";

const app = fastify()
const prisma = new PrismaClient()

app.register(cors, { 
    credentials: false,
    methods: ["DELETE", "POST", "GET", "PUT", "OPTIONS", "PATCH"],
})

app.get('/', (req, reply) => { reply.send({message: 'hello'}) })

app.get('/users', async () => {
    const users = await prisma.user.findMany()

    return { users }
})


app.post('/users', async (request, reply) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string(),
    })
    const { name, email } = createUserSchema.parse(request.body)

    await prisma.user.create({
        data: {
            name,
            email,
        }
    })

    return reply.status(201).send();
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log("HTTP Server Running");
})