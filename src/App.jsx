import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from "./components/Perfil";
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';


function App() {
  const [formulatioEstaVisivel, setFormulatioEstaVisivel] = useState(true)
  return (
    <>
      <Perfil />
      <ReposList />

      {/* {formulatioEstaVisivel && (
        <Formulario />
        )}
      <button onClick={() => setFormulatioEstaVisivel(!formulatioEstaVisivel)} type='button'>Toggle Form</button> */}
    </>
  )
}

export default App
