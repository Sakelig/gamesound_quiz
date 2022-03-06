import express from "express"
import bodyParser from "body-parser";
import path from "path"


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

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

