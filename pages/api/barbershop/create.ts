import BarberController from '@/controllers/BarberController';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb', // Set the size limit (e.g., 2mb, 5mb, 10mb, etc.)
        },
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { data } = req.body
        const response = await BarberController.createBarber(data);
        if (!response) {
            res.status(401).json({ message: 'no data' });
            return
        }


        res.status(200).json({ "response": response.id })
    }
}
