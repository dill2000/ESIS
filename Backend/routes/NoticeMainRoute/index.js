const routes = require("express").Router();
const NoticeRoute = require("../../controller/notice");
const AuthMiddle = require("../../middlewares/auth");

routes.post("/add-notice", NoticeRoute.addNotice);
routes.get("/get-notices", NoticeRoute.getNotices);



module.exports = routes;
