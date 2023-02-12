import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitado} type={props.type} placeholder={placeholderModificada} required={props.obrigatorio}></input>
        </div>
    )
}

export default CampoTexto