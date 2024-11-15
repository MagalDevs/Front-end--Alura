import './Rodape.css'

const Rodape = () => {
  return (
    <footer>
        <div className='social'>
            <img src='/imagens/fb.png' alt='imagem do Facebook'/>
            <img src='/imagens/tw.png' alt='imagem do Twitter'/>
            <img src='/imagens/ig.png' alt='Imagem do Instagram'/>
        </div>
        <img className='logo' src='imagens/logo.png' alt='Logo do Organo'/>
        <p>Desenvolvido por alura.</p>
    </footer>
  )
}

export default Rodape
