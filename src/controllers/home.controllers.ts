import { FastifyReply, FastifyRequest } from 'fastify'
import { getHomeMessage } from '../middlewares/home.services'

export async function getHomeController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = getHomeMessage()

  return data.length > 0
    ? reply.status(200).send({ message: 'Server on-line', data })
    : reply.status(404).send({ message: 'Error :(' })
}