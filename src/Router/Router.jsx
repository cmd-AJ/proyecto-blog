import Adminpage from "../components/Admin/Admenu"
import Login from "../components/Admin/Login"
import Home from "../components/Publico/Homepage"
import proptypes from 'prop-types'
import Contact from '../components/Contact/Contact'
/* eslint-disable react/prop-types */

function Routers({ ruta }) {
    switch (ruta) {
        case "/": //Main Page
            return <Home></Home>
        case "/admin": //Main Page
            return <Login></Login>
        case "/adminpage": //Main Page
            return <Adminpage></Adminpage>
        case "/contact": //Contacto
            return <Contact></Contact>
        default:
            return (
                <div>
                    <h1>Bloggin....</h1>
                </div>
            )
    }
}   

Routers.proptypes ={
    ruta: proptypes.string
}



export default Routers