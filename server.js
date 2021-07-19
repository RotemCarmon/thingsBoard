const express = require('express');
const cors = require('cors')

const axios = require('axios')

const { connectSockets , getSocket} = require('./socket.service')
const app = express()
app.use(express.json())

const corsOptions = {
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
  credentials: true
}
app.use(cors(corsOptions))

// curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"tenant@thingsboard.org", "password":"tenant"}' 'http://THINGSBOARD_URL/api/auth/login'

async function connectToWs() {
  const JWT = await axios({
    method: 'post',
    url: 'http://localhost:8080/api/auth/login',
    data: {
      "username": "tenant@thingsboard.org", "password": "tenant"
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  // console.log('JWT:', JWT.data.token)
  return JWT.data.token
}


app.get('/connect-socket', async (req, res) => {

  const token = await connectToWs()
  connectSockets(token)
  res.send(token)
})


app.get('/baba', (req,res)=> {
  getSocket().emit('baba')
  res.end()
})

app.get('/api', (req, res) => {
  console.log('Got GET!!');
  res.end()
})

app.listen(3030, () => {
  console.log('Running on 3030');
})