import '../assets/icons/cruz.png'
import '../assets/icons/menu.svg'
import '../assets/LogoGilli.png'
import HeroRectangleOne from "../assets/images/Retangulo01.png";
import HeroRectangleTwo from "../assets/images/Retangulo02.png";
import Caminhao01 from "../assets/images/imgcaminhao1.png";
import "../styles/hero.css";
import '../styles/header.css'
import '../styles/solution.css'
import '../styles/utility.css'
import '../styles/index.css'
import '../styles/buttons.css'
import { useEffect, useState } from 'react';
import LoginWindow from '../logic/loginWindow';
import CustomButton from '../components/CustomButton';
import Hook from '../components/Hook';

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    //Login
    const [loginAberto, setLoginAberto] = useState(false);
    // Função para abrir o modal
    const abrirLogin = () => {
        setLoginAberto(true);
    };

    // Função para fechar o modal
    const fecharLogin = () => {
        setLoginAberto(false);
    };
    //Login

    return (
        <>
            <header className="container py-sm" id='inicio'>
                <nav className="flex items-center justify-between">
                    <img src={"src/assets/LogoGilli.png"} alt="LogoGilli" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#inicio">INICIO</a>
                            </li>
                            <li>
                                <a href="#solution">PRANCHAS</a>
                            </li>
                            <li>
                                <a href="#fazerPedidos">FAZER PEDIDO</a>
                            </li>
                            <li>
                                <a href="#local">CONTATOS</a>
                            </li>
                            <li>
                                <a href="#local">LOCAL</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <img
                                src={"src/assets/images/loginicon.png"}
                                alt="Icone de Login"
                                width={40}
                                height={40}
                                onClick={abrirLogin}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#inicio">INICIO</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">PRANCHAS</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#fazerPedidos">FAZER PEDIDO</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#local">CONTATOS</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#local">LOCAL</a>
                                        </li>
                                        <li>
                                            <div >
                                                <div className="flex items-center">
                                                    <img
                                                        src={"src/assets/images/loginicon.png"}
                                                        alt="Icone de Login"
                                                        width={40}
                                                        height={40}
                                                        onClick={abrirLogin}
                                                        style={{ cursor: "pointer" }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={"src/assets/icons/cruz.png"} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={"src/assets/icons/menu.svg"} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleOne} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleTwo} alt="Retangulo dois tela inicial" />
                <section className="container" id="solution">
                    {/* Itens */}
                    <header>
                        <span>
                            <h2>Pranchas</h2>
                            <h3>Histórico de Pranchas Vendidas</h3>
                            <p>Ao longo dos anos, comercializamos diversas pranchas de 2 eixos que se destacam pela robustez, durabilidade e excelente desempenho no transporte de cargas pesadas, sempre garantindo a satisfação de nossos clientes em todo o país.</p>
                        </span>
                    </header>
                    <section className="desktop-only">
                        <div className='even-columns'>
                            <div className='card'>
                                <img src={Caminhao01} alt="Foto caminhao 1" width={280} height={180} />
                                <h2>Prancha</h2>
                                <p>Comprimento: 11 metros</p>
                                <p>Largura: 2.5 metros</p>
                                <p>Carga: 12 toneladas</p>
                                <p>Freio: Ar</p>
                                <p>Cor: Branca</p>
                                <CustomButton
                                    label="Ver mais"
                                    onClick={() => window.location.href = "/card02"}
                                />
                            </div>
                            <div className='card'>
                                <img src={"src/assets/images/imgcaminhao2.png"} alt="Foto caminhao 2" width={280} height={180} />
                                <h2>Prancha</h2>
                                <p>Comprimento: 20 metros</p>
                                <p>Largura: 3.2 metros</p>
                                <p>Carga: 33 toneladas</p>
                                <p>Freio: Ar</p>
                                <p>Cor: Amarelo</p>
                                <CustomButton
                                    label="Ver mais"
                                    onClick={() => window.location.href = "/card01"}
                                />
                            </div>
                            <div className='card'>
                                <img src={"src/assets/images/imgcaminhao3.png"} alt="Foto caminhao 3" width={280} height={180} />
                                <h2>Prancha</h2>
                                <p>Comprimento: 15 metros</p>
                                <p>Largura: 3 metros</p>
                                <p>Carga: 15 toneladas</p>
                                <p>Freio: Ar</p>
                                <p>Cor: Preto</p>
                                <CustomButton
                                    label="Ver mais"
                                    onClick={() => alert("Botão pressionado!")}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="container" id="solution">
                        {/* Pedidos */}
                        <section id='fazerPedidos'>
                            <section className="container py-base">
                                <div className="flex items-center gap-3" style={{ background: 'var(--light-gray)', padding: '4rem' }}>
                                    <div>
                                        <h2>FAZER PEDIDO</h2>
                                        <form action="salvarPedido.php" method="POST">
                                            <label htmlFor="nome">Nome:</label>
                                            <br />
                                            <input type="text" id="nome" name="nome" required />
                                            <br />

                                            <label htmlFor="email">Email:</label>
                                            <br />
                                            <input type="email" id="email" name="email" required />
                                            <br />

                                            <label htmlFor="telefone">Telefone:</label>
                                            <br />
                                            <input type="tel" id="telefone" name="telefone" required />
                                            <br />

                                            <div>
                                                <label htmlFor="comprimento">Comprimento:</label>
                                                <br />
                                                <select id="comprimento" name="comprimento">
                                                    <option value="11m">11m</option>
                                                    <option value="15m">15m</option>
                                                    <option value="20m">20m</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="largura">Largura:</label>
                                                <br />
                                                <select id="largura" name="largura">
                                                    <option value="2.5m">2.5m</option>
                                                    <option value="3m">3m</option>
                                                    <option value="3.2m">3.2m</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="carga">Carga:</label>
                                                <br />
                                                <select id="carga" name="carga">
                                                    <option value="12t">12t</option>
                                                    <option value="25t">25t</option>
                                                    <option value="33t">33t</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="freio">Freio:</label>
                                                <br />
                                                <select id="freio" name="freio">
                                                    <option value="ar">Ar</option>
                                                    <option value="disco">Disco</option>
                                                    <option value="abs">ABS</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="cores">Cores:</label>
                                                <br />
                                                <select id="cores" name="cores">
                                                    <option value="amarelo">Amarelo</option>
                                                    <option value="preto">Preto</option>
                                                    <option value="branco">Branco</option>
                                                </select>
                                            </div>

                                            <br />
                                            <button className='btn-primary ' type="submit">Salvar Pedido</button>
                                        </form>
                                    </div>
                                    <div className="desktop-only">
                                        <img src={"src/assets/images/Gilli roqueiro.png"} alt="Imagem Grande" width={700} height={500} />
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>

                    <section id='local'>
                        {/* Contato */}
                        <div className="container py-base" style={{ background: 'var(--light-gray)', padding: '1rem' }}>
                            <div className="grid even-columns gap-1.5">
                                <div>
                                    <h2>CONTATOS DA EMPRESA</h2>
                                    <br />
                                    <div className="flex items-center gap-1">
                                        <img src={"src/assets/images/inconzapzap.png"} alt="WhatsApp" width={50} height={50} />
                                        <p>Telefone: (45) 99954-0011</p>
                                    </div>
                                    <br />
                                    <div className="flex items-center gap-1">
                                        <img src={"src/assets/images/iconemail.png"} alt="Email" width={50} height={50} />
                                        <p>Email: <a href="mailto:@Gilli_I_R@gmail.com.br">@Gilli_I_R@gmail.com.br</a></p>
                                    </div>
                                    <br />
                                    <div className="flex items-center gap-1">
                                        <img src={"src/assets/images/iconfacebook.png"} alt="Facebook" width={50} height={50} />
                                        <p><a href="https://www.facebook.com/GilliImplementosRodoviariosLtda/?locale=pt_BR"
                                            target="_blank">Nosso Facebook</a></p>
                                    </div>
                                </div>

                                <div>
                                    <h2>ONDE ESTAMOS</h2>
                                    <br />
                                    <p>R. Medicina, 142 - Universitário - Cascavel, PR</p>
                                    <br />
                                    <a href="https://www.google.com/maps/place/R.+Medicina,+142+-+Universit%C3%A1rio,+Cascavel+-+PR,+85819-260/@-24.9779318,-53.4445706,18.25z/data=!4m6!3m5!1s0x94f3d45283019f15:0x21f05d7232ef4589!8m2!3d-24.9780201!4d-53.4444104!16s%2Fg%2F11gf62n805?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank">
                                        <img src={"src/assets/images/imglocal.png"} alt="Localização no Google Maps" width={300} height={200} />
                                    </a>
                                </div>

                                <div>
                                    <h2>HORÁRIO DE ATENDIMENTO</h2>
                                    <br />
                                    <p>Segunda-feira a Sexta-feira</p>
                                    <br />
                                    <Hook />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section>
                <footer style={{ backgroundColor: "black", textAlign: "center", padding: "1rem" }}>
                    <p style={{ color: "white" }}>&copy; 2024 GILLI Implementos Rodoviários</p>
                </footer>
                <LoginWindow estaAberto={loginAberto} estaFechando={fecharLogin} />

            </section>
        </>
    );
}
