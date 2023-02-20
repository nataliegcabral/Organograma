import './Banner.css'

function Banner() {
    // JSX - é como o React lê o código e transforma em elementos no DOM
    return (
        <header className="banner">

            <div className='title'>

            <img src='img/logo.png' alt='' className='logo'/>   
                <h1>Jogos e Times</h1>
                <p>Organizados em um só lugar</p>
                
            </div>

            <img src="img/pessoas.png" alt="" className='pessoas'/>

        </header>
    )
}

export default Banner