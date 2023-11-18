import { NextApiRequest, NextApiResponse } from 'next';
import AuthController from '../../controllers/AuthController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await AuthController.requireAuth(req.body);
    console.log(response)

    if (response) {
        res.status(200).json({ mensaje: 'Usuario autenticado' });
        return
    }
    res.status(401).json({ mensaje: 'Acceso no autorizado' });
}