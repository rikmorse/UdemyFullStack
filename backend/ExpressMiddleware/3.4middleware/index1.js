import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const bodyParser = import("body-parser");


const app = express();
const port = 3000;

// (Does not work, instructors code)app.use(bodyParser.urlencoded({ extended: true }));
// Using built-in middleware instead of body-parser
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  // checking path __dirname using: console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


