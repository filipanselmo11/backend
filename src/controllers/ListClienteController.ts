import { FastifyRequest, FastifyReply } from "fastify";
import { ListClienteService } from "../services/ListClienteService";
class ListClienteController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listClienteService = new ListClienteService();

    const clientes = await listClienteService.execute();

    reply.send(clientes);
  }
}

export { ListClienteController };
