import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuthModel {
    static async getAllUsers() {
        return await prisma.login.findMany();
    }

    static async getUserById(id: number) {
        return await prisma.login.findUnique({
            where: { id },
        });
    }
    static async authenticateUser(user: string) {

        const user_exist = await prisma.login.findFirst({
            where: {
                user,
            },
        });

        if (!user_exist) {
            return null
        }

        return user_exist;
    }
}

export default AuthModel;