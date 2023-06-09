//https://polygon-mumbai.g.alchemy.com/v2/eZnjdRFAdTEaO_RRPnOI8ze8v2ma2U86

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/eZnjdRFAdTEaO_RRPnOI8ze8v2ma2U86",
      accounts: [
        "0e7b638df0bf766f594267e9cc075ad64c185eb129e8aa6acee713f010007465",
      ],
    },
  },
};
