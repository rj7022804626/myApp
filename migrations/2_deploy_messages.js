//var TRXMessages = artifacts.require("./TRXMessages.sol");
var TronBanks = artifacts.require("./TronBanks.sol");

module.exports = function (deployer) {
  // deployer.deploy(TRXMessages);
  deployer.deploy(TronBanks);
};
