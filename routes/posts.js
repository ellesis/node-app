var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  console.log('get-/posts/')
  res.send('get-/posts/')
})

router.post('/', (req, res, next) => {
  console.log('POST ROUTE REACHED')
  console.log(req.body)

  res.send('post-/posts/')
})

router.get('/title/:id', (req, res, next) => {
  res.json({ title: 'title-' + req.params.id })
})

router.get('/content/:id', function (req, res, next) {
  res.json({ content: 'content-' + req.params.id })
})

module.exports = router
