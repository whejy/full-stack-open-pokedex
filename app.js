const express = require('express')
const app = express()
const { version } = require('./package.json')

// get the port from env variable
const PORT = process.env.PORT || 3000

app.get('/version', (req, res) => {
  res.send(version) // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})