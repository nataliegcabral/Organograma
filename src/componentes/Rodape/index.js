import './Rodape.css'

const Rodape = () => {
    return (
    <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='https://github.com/nataliegcabral' target='_blank' rel="noreferrer">
                    <i class="devicon-github-original"></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/nataliegc/' target='_blank' rel="noreferrer">
                    <i class="devicon-linkedin-plain"></i>
                    </a>
                </li>                
                <li>
                    <a href='https://www.instagram.com/nataliegcabral/' target='_blank' rel="noreferrer">
                        <img src='img/ig.png' alt=''/>
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <img src='img/logo.png' alt=''/>
        </section>

        <section>
            <p>Desenvolvido por Natalie Cabral.</p>
        </section>
        
    </footer>
    )
}

export default Rodape
