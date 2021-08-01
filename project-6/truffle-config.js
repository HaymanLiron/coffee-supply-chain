const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "1b7c407efaa84df986f7a64bd661516d";

const fs = require('fs');
const privateKey = fs.readFileSync("secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gasPrice: 10000000000
    },    
  }
};
