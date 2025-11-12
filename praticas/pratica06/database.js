const { MongoCLient } = require("mongodb");
const url = "mongodb+srv://<db_username>:<db_password>@cluster0.1ribuah.mongodb.net/";
const client = new MongoCLient(url);

async function conectarDb() {
    await client.connect();
    return client.db('agenda');
}

module.exports = conectarDb;