const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


module.exports.renderChart = async (req,res) => {
  const ping = await CoinGeckoClient.ping()
  if(ping){
    const params = {
          days: 1,
          vs_currency: 'usd'
        }
    const chartData = await CoinGeckoClient.coins.fetchMarketChart('tether', params)
    res.json(chartData)
  } else {
    res.redirect('/')
  }
}
