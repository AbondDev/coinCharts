const express = require('express');
const path = require('path')
const chartRoutes = require('./routes/chart.routes.js')
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views'));

app.use('/charts', chartRoutes)
app.use('*', (req,res) => {
  res.send('tether charts are available on /charts/tether')
})

app.listen(port,()=> {
  console.log(`listening on port ${port}`)
})
