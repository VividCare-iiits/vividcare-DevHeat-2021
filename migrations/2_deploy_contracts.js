const ReportList = artifacts.require("ReportList.sol");

module.exports = function(deployer) {
  deployer.deploy(ReportList);
};