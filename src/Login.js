import {useState} from 'react'
import supabase from './SupaBase'

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');

}

const handlerUsuario = (e) => {
  setUsuario(e.target.value)
}

const handlerContra = (e) => {
  setContra(e.target)
}

const handleSubmit = (e) =>{
    e.preventDefault();

    console.log('usuario', usuario, 'contra', contra);
}

function App() {
  return (
    <>
      <form onSubmit={handleSubmit}> 
        <label>Usuario</label>
        <input type='text' value={usuario} onChange={handlerUsuario}></input>

        <label>Contra</label>
        <input type='password' value={contra} onChange={handlerContra}></input>

        <button type='submit'> Login </button>
      </form>
    </>
  );
}

export default Login;