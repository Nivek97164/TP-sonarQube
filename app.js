const { login } = require("./auth");
const { register } = require("./controllers/userController");

console.log(login("test@example.com", "admin"));
console.log(register({ email: "test@example.com" }));
