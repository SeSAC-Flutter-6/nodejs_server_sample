const express = require("express");
const url = require("url");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.end("Hello World");
});

app.get("/user", getUser);

app.post("/user", (req, res) => {
  res.json({
    message: "success",
  });
});

app.listen(port, () => {
  console.log(`Start Server at http://localhost:${port}`);
});

function getUser(req, res) {
  const userInfo = url.parse(req.url, true).query;
  let userJson = {
    name: `${userInfo.name}`,
    age: +userInfo.age,
  };
  res.json(userJson);
}
