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

app.get("/placeholder", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const responce = await fetch(url);
  const json = await responce.json();

  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // }

  const { userId, id, title, completed } = json;
  console.log(userId, id, title, completed);
  res.send(
    `<h2>UserId: ${userId}</h2><h2>Id: ${id}</h2><h2>Title: ${title}</h2><h2>Completed: ${completed}</h2>`
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
