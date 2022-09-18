const Migrations = artifacts.require("Box");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
