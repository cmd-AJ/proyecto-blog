export async function conseguirPost(){
    let data = await fetch('http://127.0.0.1:3000/posts',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })    
    let posts = data.json();
    
    return posts;
}


export async function unicopost(id){

    try{
        const data = await fetch(`http://127.0.0.1:3000/posts/${id}`)
        return data
    } catch(e){
        return e
    }

}


export async function postear(title, nombrecarro, modelocarro, content, imagen){   
    
    const object ={
        "title":title,
        "nombre_carro": nombrecarro,
        "modelo_carro": modelocarro,
        "contenido": content,
        "imagen": imagen,
        "fecha_publicacion": Date.now()
    }

    try{
        const data = await fetch(`http://127.0.0.1:3000/posts`,

    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    console.log( 'Se postea correctamente' )
    return data
    } catch(e){
        return e
    }
    
}


export async function eliminarunpost( id ){

    try{
        const data = await fetch(`http://127.0.0.1:3000/posts/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
    console.log('Sucessfully removed')
    return data
    } catch(e){
        return e
    }

}

export async function editarpost( id,title, nombrecarro, modelocarro, content, imagen){   
    
    const object ={
        "id": id,
        "title":title,
        "nombre_carro": nombrecarro,
        "modelo_carro": modelocarro,
        "contenido": content,
        "imagen": imagen,
        "fecha_publicacion": Date.now()
    }
    console.log(object)

    try{
        const data = await fetch(`http://127.0.0.1:3000/posts/${id}`,

    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    console.log( 'Se edito correctamente' )
    return data
    } catch(e){
        return e
    }
    
}