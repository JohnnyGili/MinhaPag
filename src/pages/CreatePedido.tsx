import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supaBaseConnection';
import '../styles/formulario.css'

const CreatePedido: React.FC = () => {
    const navigate = useNavigate();

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

            const { data: novoPedido, error } = await supabase.from('pedido').insert([
                {
                    nome, email, telefone, carga, comprimento, largura, freio, cor
                }
            ]).select().single();

            if (error) {
                console.error("Erro ao salvar pedido:", error);
            } else {
                ////Registrar no relatórios
                await supabase.from('relatorios').insert([
                {
                    tabela: 'pedido',
                    tipo_acao: 'criado',
                    id_item: novoPedido.id
                }
                ]);
                ////Registrar no relatórios
                alert("Pedido salvo com sucesso!");
                navigate('/editar'); 
            }
        };
    ///CREATE Pedido

    return (
    <>
        <header>
                <div style={{ position: 'relative', padding: '20px' }}>
                    <br />
                    <ul className="flex gap-1">
                            <li>
                                <button className='btn-primary' onClick={() => navigate('/Editar')}>Voltar</button>
                            </li>
                        </ul>                   
                </div>
        </header>

        <div className='formulario'>
            <h1>Adicionar Pedido</h1>
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
                <button type="submit">Salvar Pedido</button>
            </form>
        </div>
    </>
    );
};

export default CreatePedido;