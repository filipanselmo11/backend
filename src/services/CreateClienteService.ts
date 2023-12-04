import prismaClient from "../prisma";

interface CreateClienteProps {
    nome: string;
    emai: string;
}

class CreateClienteService {
    async execute({ nome, emai }: CreateClienteProps) {
        
        if(!nome || !emai) {
            throw new Error("Preencha todos os campos");
        }

        const cliente = await prismaClient.cliente.create({
            data:{
                nome,
                emai,
                status: true
            },
        })

        return cliente
    }
}

export { CreateClienteService }