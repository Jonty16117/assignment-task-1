module.exports = (sequelize, Sequelize) => {
  const TestData = sequelize.define("testData", {
    ReferalProgramName: {
      type: Sequelize.STRING,
    },
    Customers: {
      type: Sequelize.INTEGER,
    },
    OrdersPlacedUsingCoupons: {
      type: Sequelize.INTEGER,
    },
    TotalRevenue: {
      type: Sequelize.INTEGER,
    },
    AudienceWeightage: {
      type: Sequelize.INTEGER,
    },
  });

  return TestData;
};
