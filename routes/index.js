var express = require('express');
var router = express.Router();

router.post('/callback', (req, res) => {
  console.log(req.body)
  res.send('OK')
})

router.get('/success', (req, res) => {
  res.render('success', { title: 'Payment Success' });
});

router.get('*', (req, res) => {
  res.status(404).render('notfound');
});

module.exports = router;
