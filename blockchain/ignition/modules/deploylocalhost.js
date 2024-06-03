const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = Deploy = buildModule("Deploy", (m) => {
  const accessRights = m.contract("Account", []);
  return { accessRights };
});
