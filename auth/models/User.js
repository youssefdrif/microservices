const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const { hashPassword } = require("../utils/passwordUtils");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Le Username est requis'],
      unique: true,
      trim: true,
      minlength: [3, 'Le Username doit contenir au moins 3 caracteres'],
      maxlength: [50, 'Le Username ne peut pas contenir plus de 50 caracteres']
    },
    password: {
        type: String,
        required: true,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
});

userSchema.plugin(uniqueValidator, { message: "L'email est déjà utilisé. Veuillez en choisir un autre." });

userSchema.pre("save", async function (next) {
    try {
      if (!this.isModified("password") || !this.password) {
        return next();
      }
      const hashedPassword = await hashPassword(this.password);
      this.password = hashedPassword;
  
      next();
    } catch (err) {
      next(err);
    }
  });
const User = mongoose.model("User", userSchema);

module.exports = User;