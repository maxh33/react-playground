import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.css'
import Perfil from "./components/Perfil";
// import Formulario from './components/Formulario';
import ReposList from './components/ReposList';



function App() {
  // const [formulatioEstaVisivel, setFormulatioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    setNomeUsuario(inputValue)
  }
  return (
    <>
      <input className={style.input}  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Nome usuario GitHub' />
      <button className={style.button} onClick={handleSearch}>Buscar</button>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
        )}
    </>
  )
}

export default App
