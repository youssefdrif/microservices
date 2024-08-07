const express = require("express");
const productsRouter = require("./app/routes/productRoutes");
const connectDB = require("./config");
require("dotenv").config();

const PORT = process.env.PORT || 8082;

connectDB();

const app = express();
app.use(express.json());
app.use("/", productsRouter)

app.listen(PORT, () => {
    console.log(`Products microservice is listening on port ${PORT}`);
});

module.exports = app;
