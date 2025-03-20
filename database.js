const { MongoClient } = require("mongodb")

const url =
    "mongodb+srv://namastedev:D8CHG1wF6BaR1RFR@namastenode.mg2rr.mongodb.net/"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    await client.connect();
    console.log("Connected successfully to server")

    const db = client.db(dbName)
    const collection = db.collection("User")

    const data = {
        "firstname": "Mona",
        "lastname": "Singh",
        "city": "Mumbai",
        "phoneNumber": "9999999999"
    }

    const insertResult = await collection.insertOne(data);
    console.log('Inserted documents =>', insertResult);

    // const updateResult = await collection.updateOne({"firstname": "Mona"}, { $set: { "firstname": "Monu" } });
    // console.log('Updated documents =>', updateResult);

    // const deleteResult = await collection.deleteMany({"firstname": "Monu"});
    // console.log('Deleted documents =>', deleteResult);  

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the User collection =>", countResult);

    const result = await collection.find({"firstname" : "Gayatri"}).toArray();
    console.log("result : ",result)

    return "done."
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());