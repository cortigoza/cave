import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuthModel {
    static async getAllUsers() {
        return await prisma.usuario.findMany();
    }

    static async getUserById(id: number) {
        return await prisma.usuario.findUnique({
            where: { id },
        });
    }
    static async authenticateUser(nombre: string) {

        const user_exist = await prisma.usuario.findFirst({
            where: {
                nombre,
            },
        });

        if (!user_exist) {
            return null
        }

        return user_exist;
    }
}

export default AuthModel;
