import './Content.css'
import React from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";


function Contenido(props){


    
    return (
        <div className="estructuraC">
        <Popover placement="top" showArrow={true}>
      <PopoverTrigger>
        <button className='backfoto' style={{backgroundImage:`url(${props.imagen})`}}><p className='nombret'>{props.name}</p></button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="anima" style={{backgroundColor:'#8D99AE'}}>
        <p>{props.modelo} {props.years}</p>
        <p style={{maxWidth:'80vw'}}>{props.descripcion}</p>
        </div>
      </PopoverContent>
    </Popover>
            

        </div>
        
        
    )

}



export default Contenido

   // const datos = [
    //   {
    //     "id": 1,
    //     "title": "Nombres De Los Carros Teslas Son Raros",
    //     "nombre_carro": "Model S,E,X,Y",
    //     "modelo_carro": "2024",
    //     "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
    //     "imagen": "",
    //     "fecha": "2024-04-04"
    //   },
    //   {
    //     "id": 2,
    //     "title": "BMW",
    //     "nombre_carro": "M5",
    //     "modelo_carro": "2024",
    //     "contenido": "VROOM",
    //     "imagen": "https://images.hgmsites.net/med/2021-bmw-5-series_100749425_m.jpg",
    //     "fecha": "2024-04-01"
    //   },
    //   {
    //     "id": 3,
    //     "title": "Rayo Maqueen",
    //     "nombre_carro": "Corvette",
    //     "modelo_carro": "2024",
    //     "contenido": "VROOM",
    //     "imagen": "https://static.motor.es/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg",
    //     "fecha": "2024-04-01"
    //   }
    
    //]