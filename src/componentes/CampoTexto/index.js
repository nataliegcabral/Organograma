import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}`

    let valor = ''

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} type="text" placeholder={placeholderModificada}required={props.obrigatorio}></input>
        </div>
    )
}

export default CampoTexto