const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Account Contract", function () {
  let Account;
  let account;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the Account contract
    Account = await ethers.getContractFactory("Account");
    account = await Account.deploy();
    await account.waitForDeployment();
  });

  it("Should create a user", async function () {
    await account.createUser("User1", "user1@example.com");
    const userBalance = await account.getBalance("user1@example.com");
    expect(userBalance).to.equal(0);
  });

  it("Should not allow creating a user that already exists", async function () {
    await account.createUser("User1", "user1@example.com");
    await expect(
      account.createUser("User1", "user1@example.com")
    ).to.be.revertedWith("User Already Exists");
  });

  it("Should deposit balance for a user", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    const userBalance = await account.getBalance("user1@example.com");
    expect(userBalance).to.equal(ethers.parseEther("1"));
  });

  it("Should withdraw balance for a user", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    await account.withdraw("user1@example.com", ethers.parseEther("0.5"));
    const userBalance = await account.getBalance("user1@example.com");
    expect(userBalance).to.equal(ethers.parseEther("0.5"));
  });

  it("Should not withdraw more balance than available", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    await expect(
      account.withdraw("user1@example.com", ethers.parseEther("1.5"))
    ).to.be.reverted;
  });

  it("Should buy coins for a user", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    await account.buy("user1@example.com", ethers.parseEther("0.5"), "ETH", 1);
    const [coins, balances] = await account.getCoins("user1@example.com");
    expect(coins[0]).to.equal("ETH");
    expect(balances[0]).to.equal(1);
  });

  it("Should sell coins for a user", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    await account.buy("user1@example.com", ethers.parseEther("0.5"), "ETH", 1);
    await account.sell("user1@example.com", "ETH", 1, ethers.parseEther("0.5"));
    const [coins, balances] = await account.getCoins("user1@example.com");
    expect(coins.length).to.equal(0);
    expect(balances.length).to.equal(0);
  });

  it("Should not buy coins without enough balance", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    await expect(
      account.buy("user1@example.com", ethers.parseEther("1.5"), "ETH", 1)
    ).to.be.revertedWith("Don't have enough balance");
  });

  it("Should not sell more coins than owned", async function () {
    await account.createUser("User1", "user1@example.com");
    await account.deposit("user1@example.com", ethers.parseEther("1"));
    await account.buy("user1@example.com", ethers.parseEther("0.5"), "ETH", 1);
    await expect(
      account.sell("user1@example.com", "ETH", 2, ethers.parseEther("0.5"))
    ).to.be.revertedWith("User should have that coin");
  });
});
