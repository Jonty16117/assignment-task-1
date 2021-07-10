const db = require("../models");
const TestData = db.testData;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: testData } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, testData, totalPages, currentPage };
};

// Create and Save a new testData
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.ReferalProgramName ||
  //   !req.body.Customers ||
  //   !req.body.OrdersPlacedUsingCoupons ||
  //   !req.body.TotalRevenue ||
  //   !req.body.AudienceWeightage) {
  //   res.status(400).send({
  //     message: "Content incomplete!",
  //   });
  //   return;
  // }

  // Create a testData
  // const testData = {
  //   "ReferalProgramName": "My Referral Program 1",
  //   "Customers": 13,
  //   "OrdersPlacedUsingCoupons": 5,
  //   "TotalRevenue": 22,
  //   "AudienceWeightage": 50,
  // }

  // Save testData in the database
  TestData.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the testData.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  // const ReferalProgramName = req.query.ReferalProgramName;
  const { page, size, title } = req.query;
  // var condition = ReferalProgramName
  //   ? { ReferalProgramName: { [Op.like]: `%${ReferalProgramName}%` } }
  //   : null;
  var condition = {};
  const { limit, offset } = getPagination(page, size);

  TestData.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving testData.",
      });
    });
};

// exports.findAndCountAll = (req, res) => {
//   const ReferalProgramName = req.query.ReferalProgramName;
//   var condition = ReferalProgramName
//     ? { ReferalProgramName: { [Op.like]: `%${ReferalProgramName}%` } }
//     : null;

//   // TestData.findAndCountAll({
//   //   where: condition,
//   //   limit: 5,
//   //   offset: ,
//   // });
// };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
