import { MongoClient } from "mongodb"

function connectToDatabase () {
    MongoClient.connect("mongodb+srv:asmatar:vanillaninja@cluster0.6es20wt.mongodb.net/?retryWrites=true&w=majority")
}

export default connectToDatabase;