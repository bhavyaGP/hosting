const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getdownloadspeed, getuploadspeed, getping, getlocation, getIP, getRankings } = require('../controller/test')


// Routes for speed tests
router.get('/fast-cli/test/download', getdownloadspeed);

router.get('/fast-cli/test/upload', getuploadspeed);

router.get('/fast-cli/ping', getping);

router.get('/location', getlocation);

router.get('/ip', getIP);

router.get('/rankings', getRankings);


module.exports = router;