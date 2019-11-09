const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./generate_trash_talk')
const helper = require("./handlebars_if_helper.js")
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  console.log(option)
  let trashTalk = generateTrashTalk(option)
  res.render('index', { trashTalk, option })
})

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})