import prismaClient from "../prisma";

class ListClienteService {
    async execute() {
        const clientes = await prismaClient.cliente.findMany();

        return clientes
    }
}

export { ListClienteService }