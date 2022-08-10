__path = process.cwd()

var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
	res.sendFile(__path + '/views/index.html')
})

router.get('/home', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/info', (req, res) => {
    info = {
        status: true,
        result: {
            namabot: 'BLUEE-BOTZ',
            namaowner: 'blueyzz',
            instagram: 'bluzi_22',
            github : 'https:\/\/github.com\/bluziMC',
        }
    }
    res.json(config)
})
module.exports = router
