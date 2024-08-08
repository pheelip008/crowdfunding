/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'sepolia',
    networks:{
      hardhat:{},
      sepolia:{
        url: 'https://sepolia.infura.io/v3/',
        accounts:[`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  
};
