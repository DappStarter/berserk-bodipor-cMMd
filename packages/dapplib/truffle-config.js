require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note meadow uncle harvest lock symptom gift'; 
let testAccounts = [
"0x91aeb8bd210a01dbb850d5e3ab1f1ffabaf093a9f84e927eb8c0c94be4cdbd90",
"0xf241d2d823c9415f205d7327b00fae5a269a501f35902a560d2885f260aaa17a",
"0x3be4ef19849f9635b757749bac3ba80c8cfae968592e5e5d344f805fde05e2d2",
"0xd92d77ba4537537590774673a424380dab9ff43cd6a8dbf012057858301bcc7e",
"0x11b358cae1a40343030bf5d17739731b19f039045cea011217431b5b9d059131",
"0x16f10425d3ba2cc28a1179bf7dd40779d18014241a42036beb75409929bb85e0",
"0x8178b26039b732905de6c34b84edf27ddd5789c2b2ae889a2a93179d66adb168",
"0x8875e12895cda045e6582db8acb3e0a6bca34cd664ca00a730dc2e63ee674c8c",
"0x19f761dd549848d0087cf2c28ba3b54bb116d858decb93261ca7f6b770b13667",
"0x4c1437a3aafe0b9d1f6220bf648aa59f49a89a237ee584f57d3d5dd38992dc73"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


