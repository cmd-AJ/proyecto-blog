import { useState, useEffect } from "react"
import { conseguirPost, editarpost, eliminarunpost, postear } from "../Api/api_docker/controlador";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import './Admenu.css'


function Adminpage() {

  const day = new Date()



  const [data, setdata] = useState([])
  const [title, setitle] = useState()
  const [nombre_carro, setnombrecar] = useState()
  const [modelo_carro, setmodelo] = useState()
  const [contenido, setcontenido] = useState()
  const [imagen, setimagen] = useState()

  const handletitle = (event) => {
    setitle(event.target.value)
  }

  const handlenombrecar = (event) => {
    setnombrecar(event.target.value)
  }

  const handlemodelo = (event) => {
    setmodelo(event.target.value)
  }

  const handlecontenido = (event) => {
    setcontenido(event.target.value)
  }

  const handleimagen = (event) => {
    setimagen(event.target.value)
  }


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await conseguirPost();
        setdata(fetchedPosts); // Update state with fetched data
        console.log(data); // Log the data after it's set in state (optional)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array: fetch data only on initial render


  const removeItem = (key) => {
    setdata(data.filter((elemento) => elemento.id !== key))
    eliminarunpost(key)

  };

  const agregarDiv = (nuevoElemento) => {
  
  postear( title,nombre_carro, modelo_carro, contenido, imagen )

    console.log(data.length)

    const nuevoDiv = {
      "id": data.length,
    "title": title,
    "nombre_carro": nombre_carro,
    "modelo_carro": modelo_carro,
    "contenido": contenido,
    "imagen": imagen,
    "fecha": new Date()
    }

    setdata([...data, nuevoDiv]);
  };

  const updateItemContent = (key, newContent, newTitle, newModleo, nombre_carro ,newimagen, newdate) => {
    setdata(
      data.map((elemento) => (elemento.id === key ? { ...elemento, contenido: newContent, title: newTitle, modelo_carro: newModleo, nombre_carro: nombre_carro ,imagen: newimagen, fecha: newdate } : elemento))
    );
    editarpost( key, title, nombre_carro, modelo_carro, contenido, imagen )

  };
    if (localStorage.getItem("Login") === "true"){
      return (

        <>
        <h1>Main-Page</h1>

          <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <button ><p className='agregarbutton'>Agregar un post</p></button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="anima" style={{backgroundColor:'#8D99AE'}}>
          <div className="clasiinput">
                Titulo:
                  <input className="disinp" onChange={handletitle} placeholder="eg. El clasico"></input>
                Nombre del Carro:
                  <input className="disinp" onChange={handlenombrecar} placeholder="eg. BMW M4"></input>
                Modelo del Carro:
                  <input className="disinp" onChange={handlemodelo} placeholder="eg. 2024"></input>
                Descripcion del Carro:
                  <textarea className="disinp" onChange={handlecontenido} placeholder="Eg. El mejor carro de todos"></textarea>
                  Link del Carro:
                <textarea className="disinp"  onChange={handleimagen} placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cI8du58seUd0y1LGBMhE1KCMqUApWaWeq0vL7nLIKg&s"></textarea>
                <button className="submitbutton" onClick={agregarDiv}> Submit Post </button>  
                </div>
          </div>
        </PopoverContent>
      </Popover>

       
        

        <div className="wholes">
  
            {data.map(elemento => { return(
          <div key={elemento.id} style={{margin:'2%'}} > 
         
            <Popover placement="top" showArrow={true}>
            <PopoverTrigger >
              <button className='mainfoto' style={{backgroundImage:`url(${elemento.imagen})`, margin:'4%'}}><p className="backtext" >{elemento.title}</p><p className="backtext"  >Modelo:{elemento.nombre_carro}  {elemento.modelo_carro}</p></button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="main-pp" >
                <p style={{maxWidth:'80vw'}}>{elemento.contenido}</p>
                <p style={{textAlign:'right'}}>{elemento.fecha}</p>
                <button className="acentrars" onClick={() => removeItem(elemento.id)}>Eliminar</button>
                <br></br>
                <div className="inputs">
                <div className="clasi">
                Titulo:
                  <input className="disinp" onChange={handletitle} placeholder="eg. El clasico"></input>
                Nombre del Carro:
                  <input className="disinp" onChange={handlenombrecar} placeholder="eg. BMW M4"></input>
                Modelo del Carro:
                  <input className="disinp" onChange={handlemodelo} placeholder="eg. 2024"></input>
                Descripcion del Carro:
                  <textarea className="disinp" onChange={handlecontenido} placeholder="Eg. El mejor carro de todos"></textarea>
                  Link del Carro:
                <textarea className="disinp"  onChange={handleimagen} placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cI8du58seUd0y1LGBMhE1KCMqUApWaWeq0vL7nLIKg&s"></textarea>
                  
  
                </div>
                <button className="acentrars" onClick={() => updateItemContent(elemento.id, contenido ,title, modelo_carro, nombre_carro, imagen ,day.getFullYear()+"-"+ day.getMonth()+1 +"-"+ day.getDate() )}>Editar</button>
                </div>
              
              </div>
            </PopoverContent>
          </Popover>
          </div>
          )
          })}
        </div>
        </>
      )

    }
    else{
      return(
      <div><h1 style={{margin:'15vh'}}> Movimiento Ilegal se necesita Usuario y Password de Admin </h1></div>
      )
    }
    
  }
  
  export default Adminpage

