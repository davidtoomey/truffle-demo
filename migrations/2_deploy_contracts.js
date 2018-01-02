var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Calculator = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Calculator, 10);
};
