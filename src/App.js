import './App.css';
import { AiFillLinkedin, AiFillYoutube, AiOutlineTwitter, AiOutlineMenu, AiOutlineUser, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Logo1 from './Img/logoBlack.webp'
import Logo2 from './Img/logoBranco.avif'
import moto1 from './Img/moto1.avif'
import moto2 from './Img/moto2.avif'
import moto3 from './Img/moto3.avif'
import moto4 from './Img/moto4.avif'
import bannermoto1 from './Img/banner-moto1.avif'
import bannermoto2 from './Img/banner-moto2.avif'
import serviço1 from './Img/serviço1.avif'
import serviço2 from './Img/serviço2.avif'
import serviço3 from './Img/serviço3.avif'
import logojapones from './Img/logojapones.webp'
import bannerpeças from './Img/peças.avif'
import shop1 from './Img/shop1.avif'
import shop2 from './Img/shop2.avif'
import shop3 from './Img/shop3.avif'
import shop4 from './Img/shop4.avif'
import shop5 from './Img/shop5.avif'
import shop6 from './Img/shop6.avif'
import shop7 from './Img/shop7.avif'
import shop8 from './Img/shop8.avif'
import shop9 from './Img/shop9.avif'
import shop10 from './Img/shop10.avif'
import shop11 from './Img/shop11.avif'
import shop12 from './Img/shop12.avif'
import bannerserviço from './Img/bannerserviços.avif'
import mecanico from './Img/mecanico.avif'
import pç from './Img/Pç.avif'
import cor from './Img/cor.avif'
import yamahaprice from './Img/yamaharevisao.avif'
import revisaopreco from './Img/revisaopreco.avif'
import qr from './Img/qrcode.png'
import app1 from './Img/appaple.avif'
import app2 from './Img/googleplay.avif'
import r3 from './Img/r3abs.avif'
import r3abs from './Img/bannerr3.png'
import r3abs1 from './Img/r31.avif'
import tec1 from './Img/tec1.avif'
import tec2 from './Img/tec2.avif'
import tec3 from './Img/tec3.avif'
import r3roxa from './Img/r3roxa.png'
import r3azul from './Img/r3azul.png'
import r3black from './Img/r3black.avif'


function openMenuMoto() {
  closeall()
  color()
  const bar = document.getElementById('motos')
  if (bar.style.display == "block") {
    bar.style.display = "none"
  } else (
    bar.style.display = "block"
  )

}

function color() {
  const color = document.getElementById('menu-bar')
  color.style.background = "white"
}

function closeall() {
  const bar = document.getElementById('serviços')
  bar.style.display = "none"
  const motos = document.getElementById('motos')
  motos.style.display = "none"
  const yamaha = document.getElementById('yamaha')
  yamaha.style.display = "none"
  const color = document.getElementById('menu-bar')
  color.style.background = "rgba(249, 249, 249, 0)"
}

function openMenuServiços() {
  closeall()
  color()
  const bar = document.getElementById('serviços')
  if (bar.style.display == "block") {
    bar.style.display = "none"
  } else (
    bar.style.display = "block"
  )
}

function openMenuServiçosClick() {
  closeall()
  const bar = document.getElementById('Main')
  bar.style.display = "none"
  const bar1 = document.getElementById('Serviço')
  bar1.style.display = "block"
  const bar2 = document.getElementById('Shop')
  bar2.style.display = "none"
}

function openMenuYamaha() {
  closeall()
  color()
  const bar = document.getElementById('yamaha')
  if (bar.style.display == "block") {
    bar.style.display = "none"
  } else (
    bar.style.display = "block"
  )

}

function openMenuYamahaClick() {
  closeall()
  const bar = document.getElementById('Main')
  bar.style.display = "block"
  const bar1 = document.getElementById('Serviço')
  bar1.style.display = "none"
  const bar2 = document.getElementById('Shop')
  bar2.style.display = "none"
  window.scrollY = "0px"
}

function colorMoto1() {
  var img = document.getElementById("img-moto-cor");
  img.src = r3roxa
}
function colorMoto2() {
  var img = document.getElementById("img-moto-cor");
  img.src = r3azul
}

const MenuBar = () =>
  <section className='menu-top'>
    <section className='menu-bar' id='menu-bar' onMouseOver={color} >
      <div className='icon-logo'>{false ? <img src={Logo1}></img> : <img src={Logo2}></img>}</div>
      <div className='seçao-all-button'>
        <button className='seçoes-btn' onClick={openMenuYamahaClick} onMouseOver={openMenuMoto}>MOTOS</button>
        <button className='seçoes-btn'>PEÇAS</button>
        <button className='seçoes-btn' onClick={openMenuServiçosClick} onMouseOver={openMenuServiços}>SERVIÇOS</button>
        <button className='seçoes-btn'>CONCESSIONÁRIAS</button>
        <button className='seçoes-btn' onClick={openMenuYamahaClick} onMouseOver={openMenuYamaha} >YAMAHA</button>
      </div>
      <div className='menu-end'>
        <div className='perfil-btn'>
          <AiOutlineUser className='menu-icon' />
          <div>LOGIN</div>
        </div>
        <AiOutlineMenu className='menu-icon' />
      </div>
    </section>
    <section id='motos'>
      <section className='motos-barra-menu'>
        <ul className='seçao-menu'>
          <div className='title-model'>SUPER SPORT</div>
          <li className='name-model'>R3 ABS</li>
          <li className='name-model'>R3 MONSTER ABS</li>
          <li className='name-model'>R3 60TH ANNIVERSARY</li>
        </ul>
        <div className='bar-menu'></div>
        <ul className='seçao-menu'>
          <div className='title-model'>MT S</div>
          <li className='name-model'>MT-03 ABS</li>
          <li className='name-model'>MT-07 ABS</li>
          <li className='name-model'>MT-09 ABS</li>
        </ul>
        <div className='bar-menu'></div>
        <ul className='seçao-menu'>
          <div className='title-model'>SPORT TOURING</div>
          <li className='name-model'>TRACER 900 GT ABS</li>
          <li className='name-model'>NMAX 160 ABS STAR WARS</li>
          <li className='name-model'>LANDER 250 CAPITÃO AMÉRICA</li>
        </ul>
      </section>
    </section>
    <section id='serviços'>
      <section className='menu-serviços'>
        <ul className='ul-menu'>
          <li className='li-menu'>SERVIÇOS E REVISÃO</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>MANUAIS E CATÁLOGOS</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>RECALL</li>
        </ul>
      </section>
    </section>
    <section id='yamaha'>
      <section className='menu-serviços-yamaha'>
        <ul className='ul-menu'>
          <li className='li-menu'>HISTÓRIA</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>RÉPLICA RED DRAGONFLY</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>IMPRENSAL</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>YRA - YAMAHA RIDING ACADEMY</li>
          <div className='bar-serviços'></div>
          <li className='li-menu'>RACING</li>
        </ul>
      </section>
    </section>
  </section>

const Btncompra = () =>
  <div className='btn-compra-confimar'>
    <div className='btn-icon'></div>
    <div className='btn-text'>COMPRE ONLINE</div>
  </div>

const Motos = () =>
  <section className='motos' >
    <Btncompra />
  </section>

const FirstPage = () =>
  <section id='Main' className='first-page' onMouseOver={closeall}>
    <Motos />
    <div className='banner'>
      <div className='banner-title'>ESCOLHA A SUA YAMAHA</div>
      <div className='banner-comments'>Existe uma para cada atitude</div>
    </div>
    <div className='menu-moto'>
      <div className='card-moto' >
        <img className='img-card-moto' src={moto1}></img>
        <div className='type-moto'>MT SERIES</div>
        <div className='name-moto'>MT-03 ABS</div>
      </div>
      <div className='card-moto' >
        <img className='img-card-moto' src={moto2}></img>
        <div className='type-moto'>SUPERSPORT</div>
        <div className='name-moto'>R3 ABS 60TH</div>
      </div>
      <div className='card-moto' >
        <img className='img-card-moto' src={moto3}></img>
        <div className='type-moto'>SUPERSPORT</div>
        <div className='name-moto'>R3 ABS</div>
      </div>
      <div className='card-moto' >
        <img className='img-card-moto' src={moto4}></img>
        <div className='type-moto'>MT SERIES</div>
        <div className='name-moto'>MT-07 ABS</div>
      </div>
    </div>
    <div className='banner-moto-serviços'>
      <div className='banners'>
        <img className='banner-moto' src={bannermoto1}></img>
        <img className='banner-moto' src={bannermoto2}></img>
      </div>
      <div className='banner-title'>PARA CUIDAR DA SUA YAMAHA</div>
      <div className='section-serviços'>
        <div className='card-serviços'>
          <img className='img-serviço' src={serviço1}></img>
          <div className='text-serviços-title'>SERVIÇOS YAMAHA</div>
          <div className='text-serviços-comments'>Escolha o plano de manutenção que cabe no seu orçamento e agende seu serviço on-line.</div>
        </div>
        <div className='card-serviços'>
          <img className='img-serviço' src={serviço2}></img>
          <div className='text-serviços-title'>PEÇAS GENUÍNAS</div>
          <div className='text-serviços-comments'>Escolha peças genuínas Yamaha e mantenha o DNA da sua motocicleta 100% original.</div>
        </div>
        <div className='card-serviços'>
          <img className='img-serviço' src={serviço3}></img>
          <div className='text-serviços-title'>YAMALUBE</div>
          <div className='text-serviços-comments'>Conheça o lubrificante genuíno Yamaha, excelente para todas as marcas de moto.</div>
        </div>
      </div>
      <div className='banner-seçoes'>
        <div className='banner-card-1'>
          <div className='banner-text-compra'>BLU COLLECTION</div>
          <div className='banner-text-comments'>FRETE GRÁTIS PARA TODO BRASIL</div>
        </div>
        <div className='banner-card-2'>
          <div className='banner-text-compra'>YAMAHA RACING BRASIL</div>
          <div className='banner-text-comments'>A competição faz parte do nosso DNA</div>
        </div>
      </div>
    </div>
    <div className='banner-japones'>
      <img className='logo-japones' src={logojapones}></img>
      <div className='text-japones'>Kando é uma palavra em japonês que descreve os sentimentos simultâneos de profunda satisfação e intenso entusiasmo que experimentamos quando encontramos algo de valor excepcional.</div>
    </div>
  </section>

const Footer = () =>
  <section className='footer' onMouseOver={closeall} >
    <div className='logo-yamaha'>YAMAHA MOTOR DO BRASIL</div>
    <div className='social-icons'>
      <div className='socias-icons'><AiFillFacebook className='socias-icons' /></div>
      <div className='socias-icons'><AiOutlineInstagram className='socias-icons' /></div>
      <div className='socias-icons'><AiOutlineTwitter className='socias-icons' /></div>
      <div className='socias-icons' ><AiFillYoutube className='socias-icons' /></div>
      <div className='socias-icons'><AiFillLinkedin className='socias-icons' /></div>
    </div>
    <div className='page-link'>
      <ul>
        <li>Serviços Financeiros</li>
        <li>Concessionárias</li>
        <li>Ética e Normas</li>
        <li>Nossa História</li>
        <li>Trabalhe Conosco</li>
        <li>Manuais e Catálogos</li>
      </ul>
      <div className='line'></div>
      <ul>
        <li>Termos de Uso</li>
        <li>Aviso de Privacidade</li>
        <li>Política de Privacidade para Candidatos</li>
        <li>Política de Segurança Cibernética</li>
        <li>Política de Qualidade Ambiental</li>
        <li>Canal de Denúncia</li>
        <li>Recall</li>
        <li>Contato</li>
      </ul>
      <div className='line'></div>
      <ul className='link-small'>
        <li>YAMAHA NAÚTICA</li>
        <li>YAMAHA MUSICAL</li>
        <li>RED DRAGONFLY</li>
      </ul>
    </div>
    <div className='sub-title'>Essa paguina é uma copia do site da Yamaha, desenvolvido para fins de educacionais.</div>
  </section>

const Shop = () =>
  <section className='shop' id='Shop' onMouseOver={closeall}>
    <img className='banner-shop' src={bannerpeças}></img>
    <div className='shop-pc'>
      <div className='title-shop'>CONHEÇA NOSSA LINHA DE PRODUTOS</div>
      <div className='line-card'>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop1}></img>
          <div className='descrição-iten-shop'>Óleo lubrificante Yamalube</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 46,00</div>
          <di className='shop-apartir'>4 X DE 12,00 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop3}></img>
          <div className='descrição-iten-shop'>Junta de cabeçote</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 182,00</div>
          <di className='shop-apartir'>12 X DE 17,90 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop4}></img>
          <div className='descrição-iten-shop'>Suporte de placa</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 80,00</div>
          <di className='shop-apartir'>8 X DE 10,00 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop5}></img>
          <div className='descrição-iten-shop'>Pedal de freio</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 252,79</div>
          <di className='shop-apartir'>12 X DE 24,83 COM JUROS</di>
        </div>
      </div>
      <div className='line-card'>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop6}></img>
          <div className='descrição-iten-shop'>Pisca traseira direito</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 95,16</div>
          <di className='shop-apartir'>11 X DE 10,03 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop7}></img>
          <div className='descrição-iten-shop'>Jogo de anéis do pistão</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 271,46</div>
          <di className='shop-apartir'>12 X DE 26,66 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop8}></img>
          <div className='descrição-iten-shop'>Radiador</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 1.740,13,00</div>
          <di className='shop-apartir'>12 X DE 170,91 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop9}></img>
          <div className='descrição-iten-shop'>Paralama diantero</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 339,86</div>
          <di className='shop-apartir'>12 X DE 33,38 COM JUROS</di>
        </div>
      </div>
      <div className='line-card'>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop10}></img>
          <div className='descrição-iten-shop'>Tampa superios do tanque</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 112,06</div>
          <di className='shop-apartir'>12 X DE 11,01 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop11}></img>
          <div className='descrição-iten-shop'>Protetor do escapamento</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 155,72</div>
          <di className='shop-apartir'>11 X DE 10,03 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop12}></img>
          <div className='descrição-iten-shop'>Farol completo</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 1.116,46</div>
          <di className='shop-apartir'>12 X DE 109,66 COM JUROS</di>
        </div>
        <div className='card-shop'>
          <img className='img-card-shop' src={shop2}></img>
          <div className='descrição-iten-shop'>Óleo lubrificante Yamalube</div>
          <div className='shop-apartir'>A PARTIR DE</div>
          <div className='shop-value'>R$ 46,00</div>
          <di className='shop-apartir'>4 X DE 12,00 COM JUROS</di>
        </div>
      </div>
    </div>
    <div className='text-atençao'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>
  </section>

const Serviço = () =>
  <section className='Serviço' id='Serviço' onMouseOver={closeall}>
    <img className='banner-serviço' src={bannerserviço}></img>
    <div className='sinops-banner'>
      <div className='text-title-serviço'>YAMAHA SERVIÇOS</div>
      <div className='text-title-serviços-coments'>Oferece todo o cuidado necessário para a sua motocicleta, através de mecânicos certificados pela Academia Técnica Yamaha - YTA, das peças genuínas e do melhor lubrificante de motor, o YAMALUBE. Tudo isso para assegurar o máximo em desempenho, durabilidade e economia a longo prazo, além de manter a Garantia e favorecer a qualificação e valorização no Programa de Seminovas, GO! Yamaha. Assim construímos a nossa missão corporativa, assegurando experiências KANDO para todos os nossos clientes.</div>
    </div>
    <div className='banner-card-serviçe'>
      <div className='card-serviçe'>
        <img className='card-img-serviçe' src={mecanico}></img>
        <div className='text-card-serviçe'>MECÂNICOS CERTIFICADOS YTA</div>
        <div className='text-card-coments-serviçe'>O programa Yamaha Technical Academy assegura a capacitação dos mecânicos das concessionárias autorizadas Yamaha.</div>
      </div>
      <div className='card-serviçe'>
        <img className='card-img-serviçe' src={pç}></img>
        <div className='text-card-serviçe'>PEÇAS GENUÍNAS YAMAHA</div>
        <div className='text-card-coments-serviçe'>Atendem a rígidos padrões de qualidade, desde a concepção do projeto até a fabricação, para manter o melhor desempenho da sua Yamaha.</div>
      </div>
      <div className='card-serviçe'>
        <img className='card-img-serviçe' src={cor}></img>
        <div className='text-card-serviçe'>YAMALUBE</div>
        <div className='text-card-coments-serviçe'>O lubrificante que é projetado pelos nossos engenheiros de motores para extrair o máximo de desempenho da sua Yamaha.</div>
      </div>
    </div>

    <div className='line-revisao'></div>
    <div className='banner-revisao-serviçe'>
      <div className='text-banner-revisao-serviçe'>
        <img className='img-revisao' src={yamahaprice}></img>
        <div className='text-comments-revisao'>A revisão periódica é fundamental para o cuidado da sua Yamaha, e com a Revisão Preço Fixo você sabe quanto vai pagar da 1ª até a 7ª revisão.
          Esse é o Cuidado Especializado Yamaha.</div>
      </div>
      <img className='banner-img-resisão' src={revisaopreco}>
      </img>
    </div>
    <div className='line-revisao'></div>
    <div className='text-agenda-revisao'>BAIXE O APP BLU CLUB E AGENDE SUA REVISÃO!</div>
    <div className='banner-qr-code'>
      <img className='img-code' src={qr} ></img>
      <div>
        <div className='text-code'>Aponte a câmera de seu smartphone para o QRcode ou clique abaixo para fazer o download do app!</div>
        <div className='app-banner'>
          <img className='app-img' src={app1}></img>
          <img className='app-img' src={app2}></img>
        </div>
      </div>

    </div>
    <div className='text-atençao'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

const R3ABS = () =>
  <section id='R3abs' onMouseOver={closeall}>
    <div className='r3abs'>
      <div className='text-r3'>R3 ABS</div>
      <div className='text-descriçao-r3'>A MOTO SUPERSPORT PARA TODOS OS DIAS</div>
    </div>
    <div className='flex banner-r3 '>
      <div className='banner-text-performace'>
        <div className='banner-perfomace'>PERFORMANCE</div>
        <div className='motor-bi'>MOTOR BICILÍNDRICO</div>
        <div className='banner-coments-performace'>A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance.</div>
      </div>
      <iframe width="1090" height="500" src="https://www.youtube.com/embed/yaNEa4YRkIg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <img className='img-banner-tecnology' src={r3abs}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'>"TECNOLOGIA</div>
        <div className='text-comments-tecnology'>PAINEL 100% DIGITAL COM SHIFT LIGHT</div>
      </div>
      <div className='box-tecnology-2'>
        Projetado para auxiliar sua performance, o painel da R3 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas.
      </div>
    </div>
    <div className='flex img-banner-tec'>
      <img className='img-tec' src={tec1}></img>
      <img className='img-tec' src={tec2}></img>
      <img className='img-tec' src={tec3}></img>
    </div>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "CONFORTO</div>
        <div className='text-comments-tecnology'>PILOTE TODOS OS DIAS</div>
      </div>
      <div className='box-tecnology-2'>
        Sua posição de pilotagem esportiva é complementada pela nova suspensão dianteira invertida e amortecedor traseiro, com 7 regulagens na pré-carga da mola, proporcionando equilíbrio perfeito entre performance, agilidade e conforto.
      </div>
    </div>
    <img className='img-banner-tecnology' src={r3abs1}></img>
    <div className='flex'>
      <div className='box-tecnology-1'>
        <div className='text-tecnology'> "DESIGN</div>
        <div className='text-comments-tecnology'>AERODINÂMICA SUPERESPORTIVA</div>
      </div>
      <div className='box-tecnology-2'>
        Seu visual traz o DNA da R series Yamaha. O novo para-brisa, entrada de ar frontal e carenagens laterais reduziram a resistência e turbulência do vento, fazendo a Nova R3 atingir até 8km/h a mais de velocidade final que o modelo anterior.
      </div>
    </div  >
    <div className='frame'>
      <iframe width="1060" height="615" src="https://www.youtube.com/embed/NABIP1_uwFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className='flex'>
      <img className='img-premiaçao' src={r3}></img>
      <div className='banner-text-performace banner-text-performace-2 '>
        <div className='banner-perfomace'>RECONHECIMENTO</div>
        <div className='motor-bi'>PREMIAÇÕES</div>
        <div className='banner-coments-performace'>A R3 foi eleita pela quarta vez como a Melhor Esportiva de 250 a 500 cc do Brasil na premiação, concedida em 2022 pela Revista MotoPremium. A opinião de consumidores e jornalistas especializados se somam para definir os ganhadores de cada categoria.</div>
      </div>
    </div>
    <div className='moto-color flex'>
      <div className='select-moto'>
        <div className='title-select'>OLHE MAIS DE PERTO
        </div>
        <div className='coments-select'>Escolha a versão que mais combina com você.
        </div>
        <div className='btn-cor roxo' onClick={colorMoto1}></div>
        <div className='mots'><span>PHANTON PURPLE</span><br />
          Roxo Metálico</div>
        <div className='btn-cor azul' onClick={colorMoto2}></div>
        <div className='mots'><span>RACING BLUE</span><br /> Azul Metálico</div>
      </div>
      <img id='img-moto-cor' src={r3roxa} ></img>
    </div>
    <img className='r3-sale' src={r3black}></img>
    <div className='r3-sale-text'>
      <div className='text-sale-1'>R3 ABS</div>
      <div className='line-sales'></div>
      <div className='flex'>
        <div>
          <div className='text-sale-2'>A PARTIR DE</div>
          <div className='text-sale-2'>R$</div>
        </div>
        <div className='text-sale-3'>32.890,00</div>
      </div>
      <div className='line-sales'></div>
      <div className='text-sale-4'>FRETE DE ACORDO COM A REGIÃO</div>
    </div>
    <div className='r3-seles'></div>
    <div className='tabela-financiamento'>
      <div className='financia'>FINANCIAMENTO</div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>12x de</div>
        <div className='text-finan-2'>R$  2.071, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>ZERO</div>
      </div>
      <div className='line-tabela'></div>
      <div className='flex tabela-1'>
        <div className='text-finan-1'>ENTRADA</div>
        <div className='text-finan-2'>R$  10.241, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>SALDO</div>
        <div className='text-finan-2'>36x de</div>
        <div className='text-finan-2'>R$  824, 00</div>
        <div className='barra-tabela'></div>
        <div className='text-finan-1'>TAXA</div>
        <div className='text-finan-2'>0,99% a.m.</div>
      </div>
      <div className='simule-financiamento'>SIMULE O SEU FINANCIAMENTO</div>
    </div>
    <div className='text-modelo'>
      "Modelo YZF-R3 modelo 2024. Preço Público Sugerido: R$ 32.890,00 à vista, sem frete. Preço de Venda R$ 34.135,00 à vista (base ICMS 12%) com frete incluso no valor de R$ 1.245,00, ou financiamento na modalidade de CDC em 12 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 2.071,00. Taxa de juros de 0% a.m. e 0% a.a. Custo efetivo total (CET). Ou em 36 meses: Entrada de R$ 10.241,00 (30%) e parcelas mensais fixas e sucessivas de R$ 824,00. Taxa de juros de 0,99% a.m. e 13% a.a. Custo efetivo total (CET) 15,65% a.a., IOF no valor de R$ 94,08. Valor total a ser financiado R$ 24.851,08 e valor final total (com encargos de financiamento) de R$ 39.905,00. Para o cálculo da CET foi considerada a tarifa de cadastro de R$ 600,00, valor de IOF informado em cada condição e valor médio de registro de contrato de R$ 263,00. O valor da taxa de registro de contrato praticado em cada Estado altera o valor da parcela de financiamento divulgada. Confira o valor da taxa de registro de contrato vigente e ICMS no Estado de emplacamento da motocicleta no ato da compra. Em caso de inadimplência, é permitida a cobrança de: Multa moratória de 2% mais juro de mora de 1% + taxa de juros remuneratórios pactuados no contrato ao mês (resolução 4558 do Banco Central). Conforme Art.52, § 2º da Lei Fed. 8.078/90, do Código de Defesa do Consumidor fica assegurado ao consumidor à liquidação antecipada do débito total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos. As Condições gerais da Cédula de Crédito Bancário Operações de Financiamento de Bens está disponível no site do Banco Yamaha. Carência de 30 dias para pagamento da primeira parcela de financiamento. Condições válidas exclusivamente para financiamentos realizados pelo Banco Yamaha Motor do Brasil S.A. (https://www.yamahaservicosfinanceiros.com.br/banco.De 01/05/2023 a 31/05/2023, limitados a 50 unidades de cada modelo (independente do plano de financiamento). Crédito sujeito à aprovação. Apenas nas concessionárias participantes. As motocicletas Yamaha estão em conformidade com o los e Veículos Similares). BANCO YAMAHA MOTOR DO BRASIL S.A. Rod. Pres. Dutra, Km 214 - Guarulhos - SP - Brasil – CEP 07178-580 -SAC Produtos: (11) 2431-6500 - sac@yamaha-motor.com.br. Central de Relacionamento com o Cliente Banco: (11) 2088-7700 – SAC Banco: 0800-774-8283 - sac.banco@yamaha-motor.com.br. SAC - Atendimento ao Deficiente Auditivo ou de Fala: 0800-774-1415. Ouvidoria: 0800-774-9000 - ouvidoria@yamaha-motor.com.br. NO TRÂNSITO, SUA RESPONSABILIDADE SALVA VIDAS "
    </div>
    <div className='text-atençao m-0'>AVISO DE FRAUDE</div>
    <div className='text-atençao-description'>A Yamaha informa que os seus produtos são comercializados por meio das concessionárias autorizadas da marca e/ou através do seu e-commerce oficial, não sendo realizadas vendas para o consumidor final por telefone, funcionários ou quaisquer outros tipos de parceiros e/ou representantes comerciais, bem como outros sites da internet.</div>

  </section>

function App() {
  return (
    <div className="App">
      <MenuBar />
      <FirstPage />
      <Shop />
      <Serviço />
      <R3ABS />
      <Footer />
    </div>
  );
}

export default App;
