import './perfil.css';

const Perfil = () => {
    const endereco = "https://avatars.githubusercontent.com/u/92723320?v=4"
    const nome = "Max H"
    return (
        <div>
            <img className="perfil-avatar" src={endereco} alt="" />
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

export default Perfil;