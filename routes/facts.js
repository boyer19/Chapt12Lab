let express = require('express')
let router = express.Router()  // map or connects paths in urls, to functions that run
                                // to provide a response

// /api/state-list
// /api/state/fact/Minnesota

let stateData = require('./state_fact.json')

// req = request
// res = response


    router.get('/about', function(req, res, next) {
         let aboutInfo = {'about': 'A state fact API to demonstrate some Express concepts, using state facts from Infoplease.'}
         res.json(aboutInfo)
    })

// Alternate form
    // router.get('/about', function(req, res, next) {
    //     return res.json({
    //         'about': 'A state fact API to demonstrate some Express concepts, using state facts from Infoplease.'
        // })
    // })

// route to respond a list of states 
router.get('/state-list', function(req, res, next) {
    let stateNames = Object.keys(stateData)  // array of keys from objects

    // this acutally send that data back to the client.
    res.json(stateNames)
    // return some kind of response
    // talk to a database
    // talk to api
    // calculate some kind of response
})

// http://127.0.0.1:3000/api/fact/New%20York
// http://127.0.0.1:3000/api/fact/Minnesota
// /fact/Iowa or fact/Missouri or fact/Hawaii
router.get('/fact/:stateName', function(req, res, next){            // first order is request, second is response
    let stateName = req.params.stateName
    let fact = stateData[stateName]
    if (fact) {
        res.json({ name: stateName, fact: fact})                    // response to line 42
    } else {
        res.status(404).send('State Not Found')
    }
})

module.exports = router