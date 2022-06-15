var express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Active Sender' });
});

router.post('/api', function (req, res, next) {
  let uuid = uuidv4();
  let template;
  if (req.body.template === '1') {
    template = "Template1"
  } else if (req.body.template === '2') {
    template = "Template2"
  } else {
    template = "Template";
  }

  axios.post('https://preprod.sapios.com.br/botrouter/api/webhook/rest/267', {
    from: {
      "userid": uuid,
      "name": "Envio HSM SapiosChat - Hapvida",
      "username": uuid
    },
    type: "message",
    callbackurl: "https://webhook.site/a67badd7-4815-41ec-8bdc-926334196f05",
    type: "event",
    totask: "Envio HSM",
    principaldialog: "start",
    name: "jumpToTaskEvent",
    eventdata: {
      telefoneRest: `${req.body.numero}`
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '360f782d-e9e5-436b-8fc6-560b6a4747bd'
    },
  })
    .then(
      res.location("https://connector.sapios.com.br/env/")
    )
    .catch(function (error) {
      console.log(error);
    });

  let body = req.body;
  console.log(body);
  res.location("https://connector.sapios.com.br/env/")
});

module.exports = router;
