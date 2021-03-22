import { MongoClient } from 'mongodb';

export default async function habdler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            !name.trim() === '' ||
            !message ||
            !message.trim() === ''
        ) {
            res.status(422).json({
                message: 'Molimo popunite kontakt formu pravilno',
            });
            return;
        }
        //Sačuvaj u bazi podataka
        const newMessage = {
            email,
            name,
            message,
        };

        //Konekcija na bazu podataka
        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ioexp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        try {
            client = await MongoClient.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (error) {
            res.status(500).json({ message: 'Neuspješna konekcija na bazu!' });
            return;
        }

        const db = client.db();

        try {
            const result = await db
                .collection('contact-form')
                .insertOne(newMessage);

            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({
                message: 'Neuspješno čuvanje podataka u bazi.',
            });
        }

        client.close();

        res.status(201).json({
            message: 'Uspješno poslano!',
            message: newMessage,
        });
    }
}
