const routes = require("express").Router();
const CustomeRoutes = require("../../controller/customer");
const AuthMiddle = require("../../middlewares/auth");

routes.post("/register-customer", CustomeRoutes.registerCustomer);



routes.post("/activate-email", CustomeRoutes.activateEmail);

routes.post("/login-customer", CustomeRoutes.CustomerLogin);

routes.get("/customer-details/:id", CustomeRoutes.getCustomerDetails);

routes.get("/customer-data/:id", CustomeRoutes.fetchDataofCustomer);

routes.put("/customer-details/:id", CustomeRoutes.updateUser);

routes.delete("/customer-details/:id", CustomeRoutes.deleteCustomer);

module.exports = routes;
