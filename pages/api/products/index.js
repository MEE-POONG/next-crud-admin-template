import prisma from "@/lib/prisma";


export default async function products(req, res) {

    const { method } = req;

    switch (method) {
        case 'GET':
            const data = await prisma.product.findMany({
                orderBy: {
                    name: 'asc'
                }
            });
            res.status(200).json({ data });
            break
        case 'POST':
            try {
                console.log(req.body, req.query);
            } catch (error) {
                res.status(400).json({ error });
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}