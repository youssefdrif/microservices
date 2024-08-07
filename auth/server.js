const express = require("express");
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");
require('dotenv').config();

const app = express();

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connexion a mongodb réussie');
    } catch (error) {
        console.error('Erreur lors de la connexion a mongodb:', error.message);
    }
};

connectionDB();

app.use(express.json());

app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
