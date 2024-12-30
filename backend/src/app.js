import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import { postRoutes } from './routes/posts.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
postRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
