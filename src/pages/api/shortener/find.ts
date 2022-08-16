import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse, } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await prisma.$connect()
        await prisma.shortened.findFirst({
            where: {
                tag: String(req.query.tag)
            }
        })
            .then(doc => res.status(200).json(doc))
            .catch(err => res.status(404).json(err));
    }
}

export default handler;