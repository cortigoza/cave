import type { NextApiRequest, NextApiResponse } from 'next';
import BarberController from '../../controllers/BarberController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const response = await BarberController.listBarber();
        if (!response) {
            res.status(401).json({ message: 'no data' });
            return
        }

        res.status(200).json({ "response": response })
    }
}
