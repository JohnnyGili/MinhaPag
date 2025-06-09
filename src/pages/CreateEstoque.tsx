import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supaBaseConnection';
import '../styles/formulario.css'

const CreateEstoque: React.FC = () => {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate('/');
    };

    const [data_modificacao, setDataDeModificacao] = useState('');
    const [documentacao, setDocumentacao] = useState('');
    const [estado, setEstado] = useState('');
    const [preco, setPreco] = useState('');
    const [comprimento, setComprimento] = useState('11m');
    const [largura, setLargura] = useState('2.5m');
    const [carga, setCarga] = useState('12t');
    const [freio, setFreio] = useState('ar');
    const [cor, setCor] = useState('amarelo');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from('estoque').insert([
            {
            data_modificacao, documentacao, estado, preco, carga, comprimento, largura, freio, cor
            }
        ]);

        if (error) {
            console.error("Erro ao salvar Prancha:", error);
        } else {
            alert("Prancha salvo com sucesso!");
            navigate('/editar'); 
        }
    };

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
            <h1>Adicionar Prancha</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="data_modificacao">Data De Modificacao:</label>
                <br />
                <input type="date" id="data_modificacao" value={data_modificacao} onChange={(e) => setDataDeModificacao(e.target.value)} required/>
                <br />

                <label htmlFor="documentacao">Documentacao:</label>
                <br />
                <input type="text" id="documentacao" value={documentacao} onChange={(e) => setDocumentacao(e.target.value)} required/>
                <br />

                <label htmlFor="estado">Estado:</label>
                <br />
                <input type="text" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required/>
                <br />

                <label htmlFor="preco">Preço:</label>
                <br />
                <input type="number" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required/>
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
                <button type="submit">Salvar Prancha</button>
            </form>
        
        </div>
    </>
    );
};

export default CreateEstoque;