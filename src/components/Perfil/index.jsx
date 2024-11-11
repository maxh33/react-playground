import './perfil.css';

const Perfil = () => {
    const endereco = "https://avatars.githubusercontent.com/u/92723320?v=4"
    const nomeUsuario = "Max H"
    return (
        <header>
            <img className="perfil-avatar" src={endereco} alt="" />
            <h1 className='perfil-titulo'>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;