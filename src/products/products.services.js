const productsController = require("./products.controller");

const getAllProducts = (req, res) => {
  productsController
    .getAllProducts()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getProductByID = (req, res) => {
  const id = req.params.id;
  productsController.getProductByID(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const postProduct = (req, res) => {
  const { name, category, price, isAvailable } = req.body;

  if (name && category && price) {
    productsController
      .createProduct({ name, category, price, isAvailable })
      .then((response) => {
        res.status(201).json({ message: "Created!" });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Invalid or missing data" });
  }
};

const putProduct = (req, res) => {
  const id = req.params.id;
  const { name, category, price, isAvailable } = req.body;

  if (name && category && price) {
    productsController
      .updateProduct(id, { name, category, price, isAvailable })
      .then((response) => {
        res.status(201).json({ message: "Product succesfully changed!" });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Invalid or missing data" });
  }
};

const patchProduct = (req, res) => {
  const id = req.params.id;
  const { name, category, price, isAvailable } = req.body;

  if ({ name, category, price, isAvailable }) {
    productsController
      .updateProduct(id, { name, category, price, isAvailable })
      .then((response) => {
        res.status(200).json({ message: "Product patched" });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Invalid or missing data" });
  }
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  productsController
    .deleteProduct(id)
    .then((response) => {
      res.status(204).json({ message: "Deleted" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllProducts,
  getProductByID,
  postProduct,
  putProduct,
  patchProduct,
  deleteProduct,
};
