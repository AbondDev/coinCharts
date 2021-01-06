const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


module.exports.render = async (req,res) => {
  const {id} = req.params
  try{
    const params = {
          days: 1,
          vs_currency: 'usd'
        }
    const rawChartData = await CoinGeckoClient.coins.fetchMarketChart(id, params)
    res.json(rawChartData)
  } catch(e) {
    console.log(e)
    res.status(400).send('Server error: Unable to complete request')
  }
}
