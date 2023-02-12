import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (
    (imagem !== '') ? <div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    :      
        <div className='colaborador'>
       <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img className='no-icon' src='img/no-icon.png' alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <p>{cargo}</p>
        </div>
        </div>
    
    )
}

export default Colaborador