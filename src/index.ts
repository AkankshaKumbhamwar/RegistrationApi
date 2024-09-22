import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import User from './models/user';
import Address from './models/address';
import sequelize from './models/db';

const app = express();
app.use(bodyParser.json());

sequelize.sync().then(() => console.log('Database synced!'));

app.post('/submit', async (req: Request, res: Response) => {
    const { name, address } = req?.body;
    console.log({ name, address });

    if (!name || !address) {
        return res.status(400).json({ error: 'Name and address are required' });
    }

    try {
        const user = await User.create({ name });
        await Address.create({ address, userId: user.id });
        res.status(201).json({ message: 'User and address saved successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

const PORT = 100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
