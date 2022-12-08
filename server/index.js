const express = require('express')
const path = require('path')
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

async function fetchEvents() {
  let response = await fetch('https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  let data = await response.json()

  if (!data['@graph']) {
    return []
  }

  return data['@graph'].filter((event) => event.address)
}

app.get('/api/events', async (req, res) => {
  const response = await fetchEvents()
  res.json(response)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)
