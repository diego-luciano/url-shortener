import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse, } from "next";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST' && req.body?.url) {
        await prisma.shortened.create({
            data: { origin: req.body?.url, tag: nanoid(5) }
        })
            .then(({tag}) => res.status(200).json({tag}))
            .catch(err => res.status(404).json(err));
    }
}
