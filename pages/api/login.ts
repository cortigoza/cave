import type { NextApiRequest, NextApiResponse } from 'next';
import AuthController from '../../controllers/AuthController';

interface LoginRequest {
    username: string;
    password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body as LoginRequest;
        const response = await AuthController.login(username, password);
        if (!response) {
            res.status(401).json({ message: 'Credenciales inválidas' });
            return
        }
        res.status(200).json({ "response": response })
    }
}