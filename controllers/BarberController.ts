import BarberModel from '../models/BarberModel';

interface data {
    id: number
}
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
}

export default BarberController;