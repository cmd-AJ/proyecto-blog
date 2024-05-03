import { useState } from 'react'
import '../Admin/login.css'

function Login() {

    const [user, settuser] = useState()

    const [pass, setpass] = useState()
    const [valido, setvalido] = useState('')


    const handleusuario = (event) => {
        settuser(event.target.value)
    }
    const handlepass = (event) => {
        setpass(event.target.value)

    }

    const click = () => {
        if(user === 'Andre' && pass === '123'){
            window.location.replace(`/adminpage?user=${user}&password=${pass}`)
            localStorage.setItem('Login', true)
            setvalido('')
        }
        else{
            setvalido('*Password 404')

        }
        
    }

    return (
      <div className='background'>
          <h1>Admin Blog</h1>

          <form  >
          <h3>Nombre</h3>
            <input className='loginform' onChange={handleusuario} placeholder='Nombre'></input>
            <h3>Password</h3>
            <input className='loginform' onChange={handlepass} placeholder='Password'></input>
            <p style={{color:'red'}}>{valido}</p>
          </form>
          <button style={{marginTop:'10px'}} onClick={click}>Inicar Sesion</button>
          
      </div>
    )
  }
  
  export default Login