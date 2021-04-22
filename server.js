let express = require('express')
let routes = require('./routes/facts.js')

let app = express()

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})

//  https://gist.githubusercontent.com/claraj/560833e27b719c3f7a47fea75b9e3c71/raw/643cc64097ec29413fa2c3e59774f1d677f28650/1.%2520server.js