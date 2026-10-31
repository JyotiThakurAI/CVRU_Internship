let products = require("../data/products");

// GET ALL PRODUCTS
exports.getAllProducts = (req, res) => {
res.status(200).json({
success: true,
count: products.length,
data: products,
});
};

// GET PRODUCT BY ID
exports.getProductById = (req, res) => {
const id = parseInt(req.params.id);
const product = products.find(p => p.id === id);
if (!product) {
return res.status(404).json({ message: "Product not found" });
}

res.status(200).json(product);
};

// ADD PRODUCT
exports.addProduct = (req, res) => {
const { name, price } = req.body;

if (!name || price === undefined) {
  return res.status(400).json({
    message: "Name and price are required"
  });
}

if (Number(price) <= 0 || isNaN(Number(price))) {
  return res.status(400).json({
    message: "Price must be greater than zero"
  });
}

const newProduct = {
id: products.length + 1,
name,
price
};

products.push(newProduct);

res.status(201).json({
message: "Product added successfully",
data: newProduct
});
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
const id = parseInt(req.params.id);
const product = products.find(p => p.id === id);

if (!product) {
return res.status(404).json({ message: "Product not found" });
}

const { name, price } = req.body;

product.name = name || product.name;
product.price = price || product.price;

res.status(200).json({
message: "Product updated successfully",
data: product
});
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
const productIndex = products.findIndex(p => p.id === id);

if (productIndex === -1) {
return res.status(404).json({ message: "Product not found" });
}

products.splice(productIndex, 1);

res.status(200).json({
message: "Product deleted successfully"
});
};