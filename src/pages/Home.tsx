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
import Icon02 from "../assets/images/osama bin laden.jpg";
import Icon03 from "../assets/images/Diddy.jpg";
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
import '../styles/email.css'
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

    ///Dispara o email
    const [toMail, setToMail] = useState('');
    const [content, setContent] = useState('');

    function handleEmail() {                
        fetch('/api', {
            method: 'POST',
            headers: {
                'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjc3NGJkODcyOWVhMzhlOWMyZmUwYzY0ZDJjYTk0OGJmNjZmMGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2Njk1MTk3OTY4NTU1NDE4MzkzIiwiZW1haWwiOiJqb2hubnlnaWxsaWdpbGxpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWEloel9EQ2I0cVVqeDNTRVI0ZnF0USIsIm5iZiI6MTc1MDg5NTA4NywiaWF0IjoxNzUwODk1Mzg3LCJleHAiOjE3NTA4OTg5ODcsImp0aSI6IjFiNjBjNGM3MDA5ZTk2ODJkMzZmMTIyNmNjNzE5OWY0NTM1NjdkMjEifQ.hsv75qhU5c7N8OEqS7LzM4CbmjHf8zJ0hhbTDieue-YVOxu3YPp7NnKDkLQJuYjmDKl45d659Bhuph6E3y662CidTczFb5S1epp3egp4okN7oQxfdEBC0YFHGZ1H1YW0rpOW7UWCdIZ0pQFLlDcON01DNNo-3E6ybazmaD8xFtUqNrG_1CKHhoaHc3NkhzESKlXeiaZEHHLS1O3bgDYOi_pqgWOspFXSRr5cgXZRUFqFsJmy6Gq3jQVgcqDMfOQfsARkG6zhXYmoaK7vu4FZGJeDnrVakko98B8fxrGqG_ErIJ57ooPvICrmIxXDuGIL2PnEmCN_RLnCg7UDIcjJHw',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ toMail, content})
        }) 
        .then(response => response.json())
        .then(data => console.log('Sucesso:', data))
        .catch(error => console.error('Erro:', error));
    } 
    ///Dispara o email
    
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
                            <FunctionCard 
                                img={Caminhao01}
                                title="Prancha"
                                description={
                                <>
                                    Comprimento: 11 metros<br />
                                    Largura: 2.5 metros<br />
                                    Carga: 12 toneladas<br />
                                    Freio: Ar<br />
                                    Cor: Branca
                                </>
                                } 
                            />
                            <FunctionCard 
                                img={Caminhao02}
                                title="Prancha"
                                description={
                                <>
                                    Comprimento: 20 metros<br />
                                    Largura: 3.2 metros<br />
                                    Carga: 33 toneladas<br />
                                    Freio: Ar<br />
                                    Cor: Amarelo
                                </>
                                } 
                            />
                            <FunctionCard 
                                img={Caminhao03}
                                title="Prancha"
                                description={
                                <>
                                    Comprimento: 15 metros<br />
                                    Largura: 3 metros<br />
                                    Carga: 15 toneladas<br />
                                    Freio: Ar<br />
                                    Cor: Preto
                                </>
                                } 
                            />
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
                                    rating={5}
                                    name="Cole Macgrath"
                                    position="CEO New Marais"
                                />
                                <CarouselCard
                                    testimony=" A robustez das pranchas Gilli é coisa de outro nível. Já rodei milhares de quilômetros com a minha e nunca precisei de manutenção pesada."
                                    profileImg={Icon02}
                                    rating={3}
                                    name="Osama Bin Laden"
                                    position="CEO Al-Qaeda"
                                />
                                <CarouselCard
                                    testimony=" O atendimento foi excelente e a prancha superou as expectativas. Estabilidade, segurança e durabilidade de verdade!"
                                    profileImg={Icon03}
                                    rating={4}
                                    name="P Diddy"
                                    position="CEO White Party"
                                />    
                                <CarouselCard
                                    testimony="Comprei uma prancha de 2 eixos da Gilli há mais de 5 anos e até hoje ela entrega resultado. Aguenta carga pesada sem problema nenhum!"
                                    profileImg={Icon01}
                                    rating={5}
                                    name="Cole Macgrath"
                                    position="CEO New Marais"
                                />
                                <CarouselCard
                                    testimony=" A robustez das pranchas Gilli é coisa de outro nível. Já rodei milhares de quilômetros com a minha e nunca precisei de manutenção pesada."
                                    profileImg={Icon02}
                                    rating={3}
                                    name="Osama Bin Laden"
                                    position="CEO Al-Qaeda"
                                />
                                <CarouselCard
                                    testimony=" O atendimento foi excelente e a prancha superou as expectativas. Estabilidade, segurança e durabilidade de verdade!"
                                    profileImg={Icon03}
                                    rating={4}
                                    name="P Diddy"
                                    position="CEO White Party"
                                />                                                          
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
                                <p>Você tem direito a uma analise de um pedido.</p>
                            </span>
                                <h2>Grátis</h2>
                            <button type="button" key="free" className="btn-primary">
                                Pedir agora
                            </button>
                            <span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na empresa</p>
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
                                <p>Você tem direito a diversas analises de pedidos.</p>
                            </span>
                            <span className="price">
                                <h2>R$ 89,90</h2>
                                <p>/mês</p>
                            </span>
                            <button type="button" key="free" className="btn-primary">
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
                                <p>Você tem direito a uma analise de um pedido.</p>
                            </span>
                                <h2>Grátis</h2>
                            <button type="button" key="free" className="btn-primary">
                                Pedir agora
                            </button>
                            <span className="hr" /><span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na empresa</p>
                            </span>
                            <ul className="features">
                                <img src={Check} alt="íone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </ul>
                        </div>
                    </section>
                    
            </section>

            <section  className="container">
                <section className="email">
                    {/* emailDisparar */}                 
                    <header>
                        <span>
                            <h3>Tire dúvidas com a gente, fale com conosco!!</h3><br />
                            <h2>Envie seu Email</h2><br />
                            <p>
                            Envie-nos um e-mail para receber atendimento personalizado, tirar dúvidas ou solicitar sua prancha ideal com total confiança da nossa empresa.
                            Nossa equipe está pronta para te atender com agilidade e dedicação em cada etapa do processo.
                            </p><br />
                        </span>
                    </header>
                    <section>
                        <input type="text" id="info" value={toMail} onChange={(e) => setToMail(e.target.value)} placeholder="Aqui seu Email!!!"/>
                        <br />
                        <input type="text" id="infoEmail" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Motivo: qualquer dúvida!"/>
                        <br />    
                        <section>
                            <br />
                            <button className='btn-primary' onClick={handleEmail}>Enviar Email</button>  
                        </section>                    
                    </section>
                </section>
            </section>

            <section className="container">
                <div className="grid even-columns gap-1.5">
                    <div>
                        <br />
                        <h3>LogoMarca</h3><br />
                        <a style={{marginRight:"10px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                        <a style={{marginRight:"10px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </a>
                        <a style={{marginRight:"10px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <br />
                        <h3>Empresa</h3><br />
                        <a>Sobre nós</a><br /><br />
                        <a>Faça parte do time</a><br /><br />
                        <a>Blog</a>
                    </div>
                    <div>
                        <br />
                        <h3>Funcionalidades</h3><br />
                        <a>Marketing</a><br /><br />
                        <a>Análise de dados</a><br /><br />
                        <a>Boot discord</a>
                    </div>
                    <div>
                        <br />
                        <h3>Recursos</h3><br />
                        <a>IOS & Android</a><br /><br />
                        <a>Teste a Demo</a><br /><br />
                        <a>Clientes</a><br /><br />
                        <a>API</a>
                    </div>
                </div>
                <br />
            </section>

            <footer style={{ backgroundColor: "black", textAlign: "center", padding: "1rem" }}>
                    <p style={{ color: "white" }}>&copy; 2025 GILLI Implementos Rodoviários - Todos os direitos reservados.</p>
            </footer>
            <LoginWindow estaAberto={loginAberto} estaFechando={fecharLogin} />
            </>
            );
}
