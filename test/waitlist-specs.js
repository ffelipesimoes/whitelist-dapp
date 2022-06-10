const { expect } = require("chai");
const { ethers } = require("hardhat");
const { SignerWithAddress } require("@nomiclabs/hardhat-ethers/signers")


describe("Waitlist Tests", function () {
  let vendor: Vendor
  let vendorMock: any

  beforeEach(async function () {
    ;[owner, addr1, addr2, addr3, addr4, addr5, addr6] = await ethers.getSigners()
    const Waitlist = await ethers.getContractFactory("Waitlist")
    const waitlist = await Waitlist.deploy()
    await waitlist.deployed()
  })

  describe("Waitlist functions", () => {
    // it("Should connect wallet on website", async () => {
    //   await 
    //   await vendor.BuyMwpWithPix(addr1.address, EXPECTED_MAX_SUPPLY_WAITING_LIST.sub(amountToBuy), 0)
    //   await mwptoken.mint(vendor.address, EXPECTED_MAX_SUPPLY_WAITING_LIST)
    //   await vendor.setMwpAddress(mwptoken.address)
    //   await vendor.connect(addr1).claim()
    //   await expect(await mwptoken.balanceOf(addr1.address)).gt(0)
  })


})
