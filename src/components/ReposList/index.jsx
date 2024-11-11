import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/maxh33/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);

            })
    }, []);

    return (
        <>
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul>
                {/* {repos.map(repositorio => ( */}
                {/* destructuring object */}
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no GitHub</a> <br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList;