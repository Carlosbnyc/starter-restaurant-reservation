const router = require("express").Router();
const controller = require("./tables.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .post(controller.hasValidCapacity, controller.create)
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:table_id/seat")
  .put(controller.update)
  .delete(controller.finish)
  .all(methodNotAllowed);

  console.log(controller.create);  // Add this to verify the function exists

module.exports = router;