module.exports = {
  migrations_directory: './migrations',
  networks: {
    live: {
      network_id: 1, // Ethereum public network
      host: 'localhost',
      port: 8545,
      gas: 6712388
    },
    testnet: {
      network_id: 3, // Official Ethereum test network (Ropsten)
      host: 'localhost',
      port: 8545,
      gas: 6712388
    },
    rinkeby: {
      network_id: 4,
      host: 'localhost',
      port: 8545,
      gas: 6712388
    },
    development: {
      host: 'localhost',
      port: 8545,
      gas: 6712388,
      network_id: '*'
    }
  }
};
