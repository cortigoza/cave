import { BarberDataTypes } from '@/hooks/useBarberData';
import BarberModel from '../models/BarberModel';

class BarberController {
    static async listBarber() {
        try {
            const result = BarberModel.getAllBarber()
            return result;
        } catch (error) {
            console.error('Error en listar barberia:', error);
            throw error;
        }
    }
    static async searchBarber(data: string) {
        try {
            const result = BarberModel.getBarberById(data)
            return result;
        } catch (error) {
            console.error('Error buscando barberia:', error);
            throw error;
        }
    }
    static async createBarber(data: BarberDataTypes) {
        try {
            const result = BarberModel.createBarber(data)
            return result
        } catch (error) {
            console.error('Error creando barberia: ', error)
            throw error
        }
    }
}

export default BarberController;
