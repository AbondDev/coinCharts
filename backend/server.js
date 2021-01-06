const express = require('express');
const path = require('path')
const cors = require('cors')
const chartRoutes = require('./routes/chart.route.js')
const coinRoutes = require('./routes/coin.route.js')
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


app.use('/coins', coinRoutes)
app.use('/coins/:id/charts', chartRoutes)
app.use('*', (req,res) => {
  res.send('tether charts are available on /coins/:id/charts')
})

app.listen(port,()=> {
  console.log(`listening on port ${port}`)
})
