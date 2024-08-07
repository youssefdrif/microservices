const express = require("express");
const proxy = require("express-http-proxy");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const adminMiddleware = require("./app/middlewares/adminMiddlewares");

app.use("/api/users", proxy("http://auth_service:8081"));
app.use("/api/products", adminMiddleware, proxy("http://products:8082"));

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
