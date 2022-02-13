const express = require('express')
const Knex = require('knex');
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const knexConfig = require('./knexfile');
const { Model } = require('objection')
const port = process.env.PORT || 5000


const knex = Knex(knexConfig.development)
Model.knex(knex);

app.use(cors())


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))




app.get('/', (req, res) => {
  res.send('Hello World!')
})

const members = require("./server/routes/members");

app.use("/members", members);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

