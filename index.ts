import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
import "dotenv/config";
const dev = process.env.NODE_ENV == "deveploment";

app.get("/env", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});

app.listen(port, () => {
  console.log("port: " + port);
});
