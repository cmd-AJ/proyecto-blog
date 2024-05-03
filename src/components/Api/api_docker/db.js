import getClient from './conn.js'



const conn = getClient()

export async function getAllPosts() {
  try {
    const result = await conn.query(
        'SELECT * FROM blogs'
    )
    return result.rows
} catch (err) {
    throw err
}
}

export async function getPosts(id) {
  try {
    const result = await conn.query(`SELECT * FROM blogs WHERE id = ${id};`)
    return result.rows
  } catch (e) {
    return e
  }
}

export async function createPost(title, carname, model, content, imagen) {
  try {
    const result = await conn.query(`INSERT INTO blogs (title, nombre_carro, modelo_carro, contenido,  imagen, fecha)  VALUES ('${title}', '${carname}','${model}','${content}', '${imagen}', '${new Date().toISOString()}');`)
    return result.rows
  } catch (e) {
    return e
  }
}

export async function deletepost(id) {
  try {
    const result = await conn.query(`DELETE FROM blogs WHERE id = ${id};`)
    return result.rows
  } catch (e) {
    return e
  }
}

export async function putpost(id, title, carname, model, content, imagen) {
  try {
    const result = await conn.query(` UPDATE blogs SET title = '${title}', nombre_carro = '${carname}', modelo_carro = '${model}' ,contenido = '${content}', imagen = '${imagen}', fecha = '${new Date().toISOString()}' WHERE id = '${id}';`)
    return result.rows
  } catch (e) {
    return e
  }
}
