const routes = require("express").Router();

const CustomerMainRoute = require("./CustomerRoutes");
const GasMainRoute = require("./GasRoutes");
const NoticeMainRoute = require("./NoticeMainRoute");


routes.use("/customer", CustomerMainRoute);
routes.use("/gas", GasMainRoute);
routes.use("/notice", NoticeMainRoute);




module.exports = routes;
