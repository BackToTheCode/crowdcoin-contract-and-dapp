import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9EA76f4AD12B57C10bd52CF5019810E0A6799f3B'
);

export default instance;
