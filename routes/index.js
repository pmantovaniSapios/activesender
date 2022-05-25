var express = require('express');

var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Active Sender'});
});

router.post('/api', function (req, res, next) {
  let template;
  if(req.body.template === '1') {
    template = "Template1"
  }else if(req.body.template === '2') {
    template = "Template2"
  }else {
    template = "Template3";
  }
    
  axios.post('https://preprod.sapios.com.br/botrouter/api/webhook/rest/199', {
           from: {
               "userid": "teste",
               "name": "user1",
               "username": "teste"
           },
           type: "message",
           callbackurl: "https://sapios.free.beeceptor.com",
           text: `+55${req.body.numero},${template}`
       }, {
           headers: {
               'Content-Type': 'application/json',
               'Authorization': '9f1fddb8-9979-4696-bbb2-3fb4e6cf8eaf'
           },
       })
           .then(function (response) {
               console.log(response);
           })
           .catch(function (error) {
               console.log(error);
           });
           
  let body = req.body;
  console.log(body);
});

module.exports = router;
