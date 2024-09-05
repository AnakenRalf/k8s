import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const helloMessage = `<h1>VERSION 1: Hello from the ${os.hostname()}!</h1>`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
