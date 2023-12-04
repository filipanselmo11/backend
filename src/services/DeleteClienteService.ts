import prismaClient from "../prisma";

interface DeleteClienteProps {
  id: string;
}

class DeleteClienteService {
  async execute({ id }: DeleteClienteProps) {
    if (!id) {
      throw new Error("ERRO");
    }

    const findCliente = await prismaClient.cliente.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCliente) {
      throw new Error("Cliente não existe");
    }

    await prismaClient.cliente.delete({
        where:{
            id: findCliente.id
        },
    })

    return { message: 'Deletado com sucesso'}
  }
}

export { DeleteClienteService };
