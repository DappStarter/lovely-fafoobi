require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rebel machine social hunt battle equal gasp'; 
let testAccounts = [
"0xefaf91a3f18cbac2483533123c682d70c5b14214bc6db0c0547f6d4ac0bfdd02",
"0x12b7c289b1c976753d6806681ca17c907aac4354dbc12068025f4a6055c419b5",
"0x51b9396aa70e884bdf468e0fe7038dd4e863114e7fc3189ffe3f46fa76c08ef9",
"0x7ea26fef6b1e3aa3988026d3f6481c73674bef311213385c3a0a43e449ce587d",
"0xd3335f546ea12d29271032669d68d86a4f956e261b19ac4f828f105b7cb159fd",
"0x2f13a885b0656c4da14981783feb34a836f4308b9d433cbad261c075c2e32709",
"0xe733228e4b9ab1d6c0ae10f6882f9c0ab101cf36f915875224e8bac675dc3788",
"0xc578a7293f31f4274206cd1e9bb6c49102346778c7319d9379adb70104f4311d",
"0x39d2e55421707b74a6e18de53852da4d64c4cc4baf7e0f38334fa6a13d51f915",
"0x37e6a1328c3c87140db0d8a9828805aae7eb171382773a29a8a624cf564517da"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
