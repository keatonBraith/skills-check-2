require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("db logged");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.get('/api/products', ctrl.getProducts);
app.get('/api/products/:id', ctrl.getProduct);
app.put('/api/products/:id', ctrl.updateProduct);
app.post('/api/products', ctrl.addProduct);
app.delete('/api/products/:id', ctrl.deleteProduct);

app.listen(SERVER_PORT, () => {
  console.log(`All hail the magic conch at ${SERVER_PORT}.`);
});
