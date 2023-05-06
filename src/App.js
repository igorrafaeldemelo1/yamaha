import './App.css';
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import Logo1 from './Img/logoBlack.webp'
import Logo2 from './Img/logoBranco.avif'

const MenuBar = () =>
  <section className='menu-bar'>
    <div className='icon-logo'>{false ? <img src={Logo1}></img> : <img src={Logo2}></img>}</div>
    <div className='seçao-all-button'>
      <button className='seçoes-btn'>MOTOS</button>
      <button className='seçoes-btn'>PEÇAS</button>
      <button className='seçoes-btn'>BLU COLLECTION</button>
      <button className='seçoes-btn'>SERVIÇOS</button>
      <button className='seçoes-btn'>CONCESSIONÁRIAS</button>
      <button className='seçoes-btn'>YAMAHA</button>
    </div>
    <div className='menu-end'>
      <div className='perfil-btn'>
        <AiOutlineUser className='menu-icon' />
        <div>LOGIN</div>
      </div>
      <AiOutlineMenu className='menu-icon' />
    </div>

  </section>

const Motos = () =>
  <section className='motos' >
    <div className='btn-compra-confimar'>
      <div className='btn-icon'></div>
      <div className='btn-text'>COMPRE ONLINE</div>

    </div>
  </section>


function App() {
  return (
    <div className="App">
      <MenuBar />
      <Motos />



      <div style={{height:"10000px"}}></div>
    </div>
  );
}

export default App;
