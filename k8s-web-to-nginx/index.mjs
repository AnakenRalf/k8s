
import express from "express";
import os from "os";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const helloMessage = `<h1>Hello from the ${os.hostname()}!</h1>`;
  console.log(helloMessage);
  res.send(helloMessage);
});

app.get("/nginx", async (req, res) => {
  const url = "http://nginx";
  const responce = await fetch(url);
  const text = await responce.text();
  res.send(text);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
