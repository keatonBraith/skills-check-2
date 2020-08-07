module.exports = {
  addProduct: (req, res) => {
    const db = req.app.get("db");
    const { img_url, name, price } = req.body;

    db.add_product([img_url, name, price])
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something Went Wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.read_product(id)
      .then((product) => res.status(200).send(product))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something Went Wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  getProducts: (req, res) => {
    const db = req.app.get("db");

    db.read_products()
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something Went Wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  updateProduct: (req, res) => {
    const db = req.app.get("db");
    const { img_url, name, price } = req.body;
    const { id } = req.params;

    db.update_product([id, img_url, name, price])
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something Went Wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },

  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id)

    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something Went Wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  },
};
