import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>

            <CampoTexto
                obrigatorio={true} 
                label="Seu nome" 
                placeholder="Digite seu nome ou nickname"
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
             />

            <CampoTexto
                obrigatorio={true} 
                label="Seu cargo no time" 
                placeholder="Ex: main, lane, tipo de atirador, descrição..."
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />

             <CampoTexto 
                label="Imagem" 
                placeholder="Informe o endereço da sua foto"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa 
                obrigatorio={true} 
                label="Jogo" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />

            <Botao texto="Criar Card">
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario