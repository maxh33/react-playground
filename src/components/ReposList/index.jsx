import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null); 

    useEffect(() => {
        setEstaCarregando(true);
        setErro(null); // clear error message
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw Error(`Não foi possível obter os dados dos repositórios, deste usiario confira se ele existe. Erro: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(erro => {
                setEstaCarregando(false);
                setErro(erro.message);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? (
                <h1>{erro}</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {/* destructuring object */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;