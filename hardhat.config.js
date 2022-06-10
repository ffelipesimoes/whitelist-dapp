require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()


module.exports = {
  solidity: '0.8.7',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_PROVIDER,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_PROVIDER,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },

  },

  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      rinkeby: process.env.RINKEBY_API_KEY
    }
  }
}
