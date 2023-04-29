var ClinicalTrial = artifacts.require("./ClinicalTrial.sol");
var Regulator = artifacts.require("./Regulator.sol");

module.exports = function(deployer) {
  deployer.deploy(ClinicalTrial,'0xc28F027604ac2B4b347aC07cFb5748488C4583c0', '0xa6742d1550112243CE29C3048178e4259B1bA71d',1234, 234, 345,"FDA",6789);
  deployer.deploy(Regulator);
};
