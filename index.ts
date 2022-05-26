import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

// console.log(process.env);

app.get("/hola", (req, res) => {
  res.json({
    message: "hola",
  });
});

app.listen(port, () => {
  console.log("port: " + port);
});
