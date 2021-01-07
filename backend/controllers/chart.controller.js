const CoinGecko = require('coingecko-api');
const {parseRawChartData} = require('../utils/dataParser');
const CoinGeckoClient = new CoinGecko();


module.exports.render = async (req,res) => {
  const {id} = req.params
  try{
    const params = {
          days: 1,
          vs_currency: 'usd'
        }
    const rawChartData = await CoinGeckoClient.coins.fetchMarketChart(id, params)
    if(rawChartData.success) {
      let parsedData = parseRawChartData(rawChartData.data);
      res.json(parsedData)
    } else {
      throw new Error(`Error retrieving data. Code: ${rawChartData.code} Message: ${rawChartData.message}`)
    }
  } catch(e) {
    console.log(e)
    res.status(400).send('Server error: Unable to complete request')
  }
}
