import { BarberDataTypes } from '@/hooks/useBarberData';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BarberModel {
    static async getAllBarber() {
        const result = await prisma.barberia.findMany();
        prisma.$disconnect()
        return result
    }

    static async getBarberById(info: string) {
        const id = parseInt(info);
        const result = await prisma.barberia.findUnique({
            where: { id },
        });
        prisma.$disconnect()
        return result
    }

    static async createBarber(data: BarberDataTypes) {
        const dataTransformed = { ...data.headers, ...data.about, ...data.services, ...data.schedule }
        return await prisma.barberia.create({
            data: {
                nombre: dataTransformed?.about ?? '',
                barberiacol: '',
                usuarioId: 1,
                about: dataTransformed?.about ?? '',
                direccion: '',
                telefono: '10000',
                description: dataTransformed.description ?? '',
                mosaico1: dataTransformed?.mosaico1 ?? '',
                mosaico2: dataTransformed?.mosaico2 ?? '',
                mosaico3: dataTransformed?.mosaico3 ?? '',
                banner: dataTransformed?.banner ?? '',
                horario: {
                    createMany: {
                        data: dataTransformed.schedules
                    }
                },
                servicio: {
                    createMany: {
                        data: dataTransformed.services
                    }
                }
            }
        })
    }
}

export default BarberModel;
