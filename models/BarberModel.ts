import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BarberModel {
    static async getAllBarber() {
        return await prisma.barberia.findMany();
    }

    static async getBarberById(info: string) {
        const id = parseInt(info);
        return await prisma.barberia.findUnique({
            where: { id },
        });
    }
}

export default BarberModel;