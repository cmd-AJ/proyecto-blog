import express from 'express'
import cors from 'cors'

import {
  getAllPosts, getPosts, createPost, deletepost, putpost,
} from './db.js'

const app = express()
const port = 3000

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Data which will write in a file.

app.listen(port, () => {
  console.log('Listening to http://127.0.0.1:'+ port)
})

app.use(express.json())

app.get('/posts', async (req, res) => {

  const posts = await getAllPosts()
  res.json(posts)

})

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params
  const posts = await getPosts(id)
  res.json(posts)
})

app.post('/posts', async (req, res) => {
  const [title, nombrecarro, modelocarro, content, imagen] = [req.body.title,
    req.body.nombre_carro, req.body.modelo_carro, req.body.contenido, req.body.imagen]
  if (imagen === 'undefined') {
    imagen = null
  }
  const blogs = await createPost(title, nombrecarro, modelocarro, content, imagen)
  res.json(blogs)

})

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params
  const result = await deletepost(id)
  res.json(result)
})

app.put('/posts/:id', async (req, res) => {

  const { id } = req.params

  const [title, nombrecarro, modelocarro, content, imagen] = [req.body.title,
    req.body.nombre_carro, req.body.modelo_carro, req.body.contenido, req.body.imagen]
  if (imagen === 'undefined') {
    imagen = null
  }
  const result = await putpost(id, title, nombrecarro, modelocarro, content, imagen)
  res.json(result)
  
  
})

//Babel pero en nuestro codigo?