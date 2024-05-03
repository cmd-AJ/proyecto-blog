import pkg from 'pg';
const { Pool } = pkg;

const conn = new  Pool({
    user: 'postgres', //cars
    host: 'localhost', //dpg-cop6d72cn0vc73dn8na0-a.oregon-postgres.render.com
    database: 'postgres', //carblog
    password: '7536', //OoVoOTUlKSgblmTyRlUvOedU1GPtALRf
    port: 5432

})


const getClient = () =>{
  return conn
}

export default getClient;