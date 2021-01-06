const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const path = require('path')
const fs = require('fs')
// Todo: Will need to extend the node coingecko api to allow for the top 7 trending coins. For now, I will just hardcode the info
module.exports.index = (req,res) => {
  try {
    let rawdata = fs.readFileSync(path.normalize(path.join(__dirname,'../tmp/coinData.json')));
    let parsedData = JSON.parse(rawdata);
    res.json(parsedData.coins)
  } catch(e) {
    console.log(e)
    res.status(400).send('Error completing request')
  }
}
