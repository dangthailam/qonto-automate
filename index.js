const fetch = require('node-fetch');
const fs = require('fs');
const zlib = require('zlib');
const secret = '2d247a6c1fddb3df05d312fcabfa63fa';
const login = 'bep-viet-4824';

const file = fs.createWriteStream("./result.json");

const directoryFiles = fs.readdirSync('./transactions');
fetch('https://thirdparty.qonto.com/v2/transactions?iban=FR7616958000014092850740938', {
  method: 'GET', // or 'PUT'
  headers: {
    'Authorization': `${login}:${secret}`
  }
}).then(result => {
  result.body.pipe(file)
})