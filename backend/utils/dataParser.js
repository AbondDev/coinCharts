function mapDataToAxes(data) {
  return  data.map(function(point, i){
    return {x: i, y: point[1]}
  })
}

module.exports.parseRawChartData = function(data) {
  const {prices, market_caps, total_volumes} = data
  const priceData = mapDataToAxes(prices)
  const marketCapData = mapDataToAxes(market_caps)
  const volumeData = mapDataToAxes(total_volumes)
  return {priceData,marketCapData, volumeData}
}
