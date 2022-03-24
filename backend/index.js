const express = require("express");
const products = require("../frontend/src/products");

const app = express();

app.get("/", (req, res) => {
  res.send("we are here");
});
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
console.log("hello");
