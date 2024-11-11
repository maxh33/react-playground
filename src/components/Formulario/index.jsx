import { useEffect, useState } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o componente foi montado');

        return () => {
            console.log('o componente foi desmontado');
        }
    }, []);

    useEffect(() => {
        console.log('Executou o useEffect nome');
    }, [nome]);

    useEffect(() => {
        console.log('materia A mudou para: ', materiaA);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        //console.log(evento.target.value);
        //setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    const rendenizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        console.log(soma);
        console.log(media);

        if (media >= 6) {
            return <p>Olá {nome}, você foi Aprovado</p>
        } else {
            return <p>Olá {nome}, você foi Reprovado</p>
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rendenizaResultado()}
        </form>
    )
}

export default Formulario;