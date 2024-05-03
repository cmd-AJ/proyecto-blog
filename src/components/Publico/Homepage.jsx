import './Home.css'

import Listacontent from './Listadecontenidos.jsx'


function Home() {
    return (
      <div>
          <div>
          <img className='imagencarro' src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ0bTBzc2ZocGFlY3plMHdvZjhteTNpODIzMm9lbDZyZG9wcnkzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/124NH7ohOmpWak/giphy.gif'></img>
            <h1 className='titulo'>CAR BLOG</h1>
            <Listacontent></Listacontent>
          </div>
          
      </div>
    )
  }
  
  export default Home