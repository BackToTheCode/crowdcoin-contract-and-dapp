const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// 1: Delete entire build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// 2: Read in contract data
const campaignPath = path.resolve(__dirname , 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// 3: Compile both contracts
const output = solc.compile(source, 1).contracts;

// 4: Write output to file
fs.ensureDirSync(buildPath);
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(/:/, '') + '.json'),
        output[contract]
    );
}
