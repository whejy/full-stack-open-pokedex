const express = require('express')
const app = express()
const { version } = require('./package.json')

const PORT = process.env.PORT || 3000

app.get('/version', (req, res) => {
  res.send(version)
})

// Endpoint to determine if app should be deployed. If we can't reach the server, workflow will fail and app will not deploy.
app.get('/health', (req, res) => {
  res.send('ok')
})

// eslint-disable-next-line no-unused-vars
app.get('/periodic', (req, res) => {
  throw new Error('Simulated error')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})