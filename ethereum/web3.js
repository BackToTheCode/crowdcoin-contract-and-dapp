import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    // Hijacking metamask provider but always making own version of web3.
    web3 = new Web3(window.web3.currentProvider); 
} else {
    // We are on the server *OR* the user is not running metamask.
    // Infura is a free service and does not store anything so don't worry about key.
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/LMoJv4xHBN8meKeKCQNd'
    );
    web3 = new Web3(provider);

}

export default web3;