import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateClienteService } from '../services/CreateClienteService'

class CreateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {nome, emai } = request.body as {nome: string, emai: string };
        const clienteService = new CreateClienteService();

        const cliente = await clienteService.execute({nome, emai });

        reply.send(cliente);
    }

}

export { CreateClienteController }