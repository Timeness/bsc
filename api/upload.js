export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { photo } = req.body;
        
        if (!photo) {
            return res.status(400).json({ error: 'No photo provided' });
        }

        // Here, you could save the photo to a database or cloud storage
        // For now, just send a success message
        return res.status(200).json({ message: 'Photo received!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
