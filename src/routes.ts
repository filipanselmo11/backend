import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateClienteController } from "./controllers/CreateClienteController";
import { ListClienteController } from "./controllers/ListClienteController";
import { DeleteClienteController } from "./controllers/DeleteClienteController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post('/cliente', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateClienteController().handle(request, reply);
    });
    fastify.get('/clientes', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListClienteController().handle(request, reply);
    });
    fastify.delete('/cliente', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteClienteController().handle(request, reply);
    });
}