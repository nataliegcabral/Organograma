import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}required={props.obrigatorio}></input>
        </div>
    )
}

export default CampoTexto