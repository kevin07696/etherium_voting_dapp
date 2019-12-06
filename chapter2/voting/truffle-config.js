require('babel-register')
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "4", // Match any network id
      from: '0x18e153bcDa1a83bF4590F1489E78eac9E9fdfd5D'
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "4", // Match any network id
      from: '0x18e153bcDa1a83bF4590F1489E78eac9E9fdfd5D'
    }
  }
}