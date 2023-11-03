const routes = require("express").Router();
const GasRoutes = require("../../controller/gas");
const AuthMiddle = require("../../middlewares/auth");

routes.get("/gas-details/:id", GasRoutes.fetchDataofgas);
routes.post("/register-gas", GasRoutes.addGasToCustomer);


module.exports = routes;
