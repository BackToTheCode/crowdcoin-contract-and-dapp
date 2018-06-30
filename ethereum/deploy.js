const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const mnuemonic = "twelve double task shoe aisle monitor butter draft absent rifle spirit fade";
const provider = new HDWalletProvider(
    mnuemonic, 
    "https://rinkeby.infura.io/LMoJv4xHBN8meKeKCQNd"
);
const web3 = new Web3(provider);

const deploy = async function() {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(
            JSON.parse(compiledFactory.interface)
        )
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to', result.options.address);
};

deploy();