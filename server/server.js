import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))



const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
    console.log("connected to mongoDB")
    const databases = await mongoClient.db().admin().listDatabases()
    console.log(databases)
})


app.get("/api/questions", (res, req, next) => {
    //should get all the questions from mongoDB
})

app.post("/api/answer", (res, req, next) => {
    //should send answer when its done to store in mongoDB?
    //OR
    //send in when user does a stroke?
    //OR
    //when user has succsefully gotten a question right
})


app.use(express.static("../client/dist"));

app.use((req, res, next) => {
    if (req.method ==="GET" && !req.path.startsWith("/api")){
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`started on http://localhost:${server.address().port}`);

})

