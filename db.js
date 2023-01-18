const MongoClient = require("mongodb").MongoClient;

const uri = "";

const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
