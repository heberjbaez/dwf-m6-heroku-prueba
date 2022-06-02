import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
import "dotenv/config";
const dev = process.env.NODE_ENV == "deveploment";

app.use(express.static("dist"));

//handler
app.get("/env", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});

app.get("/db-env", (req, res) => {
  res.json({
    "db-host": process.env.DB_HOST,
  });
});

app.use(express.static("dist"));

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/dist/index.html");
// });

app.listen(port, () => {
  console.log("port: " + port);
});
