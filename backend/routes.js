module.exports = (app) => {
  const testData = require("./controllers/test.controller.js");

  var router = require("express").Router();

  // Create a new TestData
  router.post("/", testData.create);

  // Retrieve all testData
  router.get("/", testData.findAll);

  // Retrieve a single TestData with id
  // router.get("/:id", testData.findOne);

  // Retrieve TestData with pagination 
  // router.get("/:page", testData.findAndCountAll);

  // Update a TestData with id
  router.put("/:id", testData.update);

  // Delete a TestData with id
  router.delete("/:id", testData.delete);

  // Delete all testData
  router.delete("/", testData.deleteAll);

  app.use("/api/testData", router);
};
