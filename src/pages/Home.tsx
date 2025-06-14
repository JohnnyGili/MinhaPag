import HeroRectangleOne from "../assets/images/Retangulo01.png";
import HeroRectangleTwo from "../assets/images/Retangulo02.png";
import Caminhao01 from "../assets/images/imgcaminhao01.png";
import Caminhao02 from "../assets/images/imgcaminhao02.png";
import Caminhao03 from "../assets/images/imgcaminhao03.png";
import LogoGilli from "../assets/LogoGilli01.png";
import Cruz from "../assets/icons/cruz01.png";
import LogIcon from "../assets/images/loginicon01.png";
import Menu from "../assets/icons/menu01.svg";
import ImagemPedido from "../assets/images/Gilli roqueiro01.png";
import IconWhatz from "../assets/images/inconzapzap01.png";
import IconEmail from "../assets/images/iconemail01.png";
import IconFacebook from "../assets/images/iconfacebook01.png";
import IconLocal from "../assets/images/imglocal01.png";
import Icon01 from "../assets/images/ColeMacGrath.webp";
import Estrela from "../assets/images/estrela.jpg";
import EstrelaVazia from "../assets/images/estrela vazia.jpg";
import "../styles/testimonials.css";
import "../styles/hero.css";
import '../styles/header.css'
import '../styles/solution.css'
import '../styles/utility.css'
import '../styles/index.css'
import '../styles/buttons.css'
import '../styles/pricing.css'
import { useEffect, useState } from 'react';
import LoginWindow from '../logic/loginWindow';
import CustomButton from '../components/CustomButton';
import Hook from '../components/Hook';
import FunctionCard from "../components/FunctionCard";
import CarouselCard from "../components/CarouselCard";
import Check from "../assets/icons/check.png";

import {supabase} from '../supaBaseConnection';

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

    ///CREATE Pedido
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [telefone, setTelefone] = useState('');
        const [comprimento, setComprimento] = useState('11m');
        const [largura, setLargura] = useState('2.5m');
        const [carga, setCarga] = useState('12t');
        const [freio, setFreio] = useState('ar');
        const [cor, setCor] = useState('amarelo');

        const handleSubmit = async (e) => {
            e.preventDefault();

            const { error } = await supabase.from('pedido').insert([
                {
                nome, email, telefone, carga, comprimento, largura, freio, cor
                }
            ]);

            if (error) {
                console.error("Erro ao salvar pedido:", error);
            } else {
                alert("Pedido salvo com sucesso!");
            }
        };
    ///CREATE Pedido
    return (
        <>
            <header className="container py-sm" id='inicio'>
                <nav className="flex items-center justify-between">
                    <img src={LogoGilli} alt="LogoGilli" width={220} height={80} />
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
                                src={LogIcon}
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
                                                        src={LogIcon}
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
                                        <img src={Cruz} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
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
                            {/* <FunctionCard 
                                img={Caminhao01}
                                title="Prancha"
                                description="teste"                               
                                /> */}
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
                                    onClick={() => window.location.href = "/card01"}
                                />
                            </div>
                            <div className='card'>
                                <img src={Caminhao02} alt="Foto caminhao 2" width={280} height={180} />
                                <h2>Prancha</h2>
                                <p>Comprimento: 20 metros</p>
                                <p>Largura: 3.2 metros</p>
                                <p>Carga: 33 toneladas</p>
                                <p>Freio: Ar</p>
                                <p>Cor: Amarelo</p>
                                <CustomButton
                                    label="Ver mais"
                                    onClick={() => window.location.href = "/card02"}
                                />
                            </div>
                            <div className='card'>
                                <img src={Caminhao03} alt="Foto caminhao 3" width={280} height={180} />
                                <h2>Prancha</h2>
                                <p>Comprimento: 15 metros</p>
                                <p>Largura: 3 metros</p>
                                <p>Carga: 15 toneladas</p>
                                <p>Freio: Ar</p>
                                <p>Cor: Preto</p>
                                <CustomButton
                                    label="Ver mais"
                                    onClick={() => window.location.href = "/card03"}
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
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor="nome">Nome:</label>
                                            <br />
                                            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                                            <br />

                                            <label htmlFor="email">Email:</label>
                                            <br />
                                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                            <br />

                                            <label htmlFor="telefone">Telefone:</label>
                                            <br />
                                            <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required/>
                                            <br />

                                            <div>
                                                <label htmlFor="comprimento">Comprimento:</label>
                                                <br />
                                                <select id="comprimento" name="comprimento" value={comprimento} onChange={(e) => setComprimento(e.target.value)}>
                                                    <option value="11m">11m</option>
                                                    <option value="15m">15m</option>
                                                    <option value="20m">20m</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="largura">Largura:</label>
                                                <br />
                                                <select id="largura" name="largura" value={largura} onChange={(e) => setLargura(e.target.value)}>
                                                    <option value="2.5m">2.5m</option>
                                                    <option value="3m">3m</option>
                                                    <option value="3.2m">3.2m</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="carga">Carga:</label>
                                                <br />
                                                <select id="carga" name="carga" value={carga} onChange={(e) => setCarga(e.target.value)}>
                                                    <option value="12t">12t</option>
                                                    <option value="25t">25t</option>
                                                    <option value="33t">33t</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="freio">Freio:</label>
                                                <br />
                                                <select id="freio" name="freio" value={freio} onChange={(e) => setFreio(e.target.value)}>
                                                    <option value="ar">Ar</option>
                                                    <option value="disco">Disco</option>
                                                    <option value="abs">ABS</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="cor">Cores:</label>
                                                <br />
                                                <select id="cor" name="cor" value={cor} onChange={(e) => setCor(e.target.value)}>
                                                    <option value="amarelo">Amarelo</option>
                                                    <option value="preto">Preto</option>
                                                    <option value="branco">Branco</option>
                                                </select>
                                            </div>

                                            <br />
                                            <button className='btn-primary' type="submit">Salvar Pedido</button>
                                        </form>
                                    </div>
                                    <div className="desktop-only">
                                        <img src={ImagemPedido} alt="Imagem Grande" width={700} height={500} />
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
                                        <img src={IconWhatz} alt="WhatsApp" width={50} height={50} />
                                        <p>Telefone: (45) 99954-0011</p>
                                    </div>
                                    <br />
                                    <div className="flex items-center gap-1">
                                        <img src={IconEmail} alt="Email" width={50} height={50} />
                                        <p>Email: <a href="mailto:@Gilli_I_R@gmail.com.br">@Gilli_I_R@gmail.com.br</a></p>
                                    </div>
                                    <br />
                                    <div className="flex items-center gap-1">
                                        <img src={IconFacebook} alt="Facebook" width={50} height={50} />
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
                                        <img src={IconLocal} alt="Localização no Google Maps" width={300} height={200} />
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
            <section id="testimonials">
                        {/* Carrocel */}
                        <header>
                            <span>
                                <p className="desktop-only">
                                    Conselho de quem conhece
                                </p>
                                <h2>Cada cliente importa!</h2>
                            </span>
                            <p>
                                Quem já adquiriu sabe da qualidade dos nossos implementos. 
                                Nossas pranchas de 2 eixos são conhecidas pela resistência e desempenho no transporte pesado. 
                                Abaixo, você confere o que dizem os clientes que já confiaram na Gilli e aprovaram.
                            </p>
                        </header>
                        <section className="carousel">
                            <div className="carousel-content">
                                <CarouselCard
                                    testimony="Comprei uma prancha de 2 eixos da Gilli há mais de 5 anos e até hoje ela entrega resultado. Aguenta carga pesada sem problema nenhum!"
                                    profileImg={Icon01}
                                    rating={3}
                                    name="Cole Macgrath"
                                    position="CEO New Marais"
                                />
                                <div className="carousel-card">
                                    <img src={Icon01} alt="Imagem perfil cliente" />
                                    <span className="testimony">
                                        <p>
                                            Comprei uma prancha de 2 eixos da Gilli há mais de 5 anos e até hoje ela entrega resultado. 
                                            Aguenta carga pesada sem problema nenhum!
                                        </p>
                                    </span>
                                    <span className="rating">
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela sem fundo" width={20} height={22} />
                                    </span>
                                    <span className="names">
                                        <p>Cole Macgrath</p>
                                        <p>CEO New Marais</p>
                                    </span>
                                </div>
                                <div className="carousel-card">
                                    <img src={Icon01} alt="Imagem perfil cliente" />
                                    <span className="testimony">
                                        <p>
                                            A robustez das pranchas Gilli é coisa de outro nível. 
                                            Já rodei milhares de quilômetros com a minha e nunca precisei de manutenção pesada.
                                        </p>
                                    </span>
                                    <span className="rating">
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={EstrelaVazia} alt="ícone estrela sem fundo" width={20} height={22} />
                                    </span>
                                    <span className="names">
                                        <p>Cole Macgrath</p>
                                        <p>CEO New Marais</p>
                                    </span>
                                </div>
                                <div className="carousel-card">
                                    <img src={Icon01} alt="Imagem perfil cliente" />
                                    <span className="testimony">
                                        <p>
                                            O atendimento foi excelente e a prancha superou as expectativas. 
                                            Estabilidade, segurança e durabilidade de verdade!
                                        </p>
                                    </span>
                                    <span className="rating">
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela" width={22} height={20} />
                                        <img src={Estrela} alt="ícone estrela sem fundo" width={20} height={22} />
                                    </span>
                                    <span className="names">
                                        <p>Cole Macgrath</p>
                                        <p>CEO New Marais</p>
                                    </span>
                                </div>                               
                            </div>
                        </section>                  
            </section>
            <section id="pricing" className="container">
                 {/* PricingCard */}                     
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                    <section className="even-columns gap-1.5">
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Básico</h3>
                                <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                            </span>
                                <h2>Grátis</h2>
                            <button type="button" key="free" className="secondary">
                                Pedir agora
                            </button>
                            <span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na loja</p>
                            </span>
                            <ul className="features">                           
                                <img src={Check} alt="íone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>                           
                            </ul>
                        </div>
                        <div className="pricing-card premium">
                            <span className="bonus">
                                    <p>1º MÊS COM DESCONTO</p>
                            </span>
                            <span className="plan">
                                <h3>Premium</h3>
                                <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                            </span>
                            <span className="price">
                                <h2>R$ 89,90</h2>
                                <p>/mês</p>
                            </span>
                            <button type="button" key="free" className="secondary">
                                Pedir agora
                            </button>
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>2 Entregas</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>5 Refeições por semana</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>2 Sucos por semana</p>
                            </span>
                        </div>
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Básico</h3>
                                <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                            </span>
                                <h2>Grátis</h2>
                            <button type="button" key="free" className="secondary">
                                Pedir agora
                            </button>
                            <span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na loja</p>
                            </span>
                            <ul className="features">
                                <img src={Check} alt="íone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </ul>
                        </div>
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
