import { server } from './lib/fastify'
import cors from '@fastify/cors'
import {
    serializerCompiler,
    validatorCompiler
} from 'fastify-type-provider-zod'
import jwt from '@fastify/jwt'
import { userRoutes } from './routes/user.routes'
import { homeRoutes } from './routes/home.routes'

async function main() {
    server.register(cors, { 
        origin: true,
        methods: ["GET","POST","PUT","DELETE","PATCH", "OPTIONS"]
    })

    await server.register(jwt, {
        secret: process.env.JWT_SECRET as string
    })

    server.setValidatorCompiler(validatorCompiler)
    server.setSerializerCompiler(serializerCompiler)

    server.setErrorHandler((error, request, reply) => {
        const toSend = {
            message: 'Validation error',
            errors: JSON.parse(error.message),
            statusCode: error.statusCode || 500
        }

        reply.code(toSend.statusCode).send(toSend)
    })

    await server.register(userRoutes, { prefix: '/users' })
    await server.register(homeRoutes, { prefix: '/' })

    await server.listen({ 
        host: '0.0.0.0', 
        port: 3333 
    })
}

main()