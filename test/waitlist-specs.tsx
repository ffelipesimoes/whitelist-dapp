
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { expect } from "chai"
import { ethers } from "hardhat"


describe("Waitlist Tests", function () {

  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress
  let addr3: SignerWithAddress
  let addr4: SignerWithAddress
  let addr5: SignerWithAddress
  let addr6: SignerWithAddress

  beforeEach(async function () {
    ;[owner, addr1, addr2, addr3, addr4, addr5, addr6] = await ethers.getSigners()
    const Waitlist = await ethers.getContractFactory("Waitlist")
    const waitlist = await Waitlist.deploy()
    await waitlist.deployed()
  })

  it("Should connect wallet on website", async () => {
    console.log(owner)
  })
})
