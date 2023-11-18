import AuthModel from '../models/AuthModel';

interface auth {
    user: string
}

class AuthController {
    static async login(username: string, password: string) {
        try {
            const result = AuthModel.authenticateUser(username);
            return result;
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            throw error;
        }
    }

    static async requireAuth(data: object) {
        const { user } = data as auth
        const response = await AuthModel.authenticateUser(user);
        if (!response) {
            return false
        }
        return true
    }
}

export default AuthController;