import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supaBaseConnection';

const UpdateEstoque = () => {
    const { id } = useParams();
    //Pega Id da Url
    const navigate = useNavigate();

    const [data_modificacao, setDataDeModificacao] = useState('');
    const [documentacao, setDocumentacao] = useState('');
    const [estado, setEstado] = useState('');
    const [preco, setPreco] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [largura, setLargura] = useState('');
    const [carga, setCarga] = useState('');
    const [freio, setFreio] = useState('');
    const [cor, setCor] = useState('');

    useEffect(() => {
        const fetchEstoque = async () => {
        const { data } = await supabase.from('estoque').select('*').eq('id', id).single();
        if (data) {
            setDataDeModificacao(data.data_modificacao);
            setDocumentacao(data.documentacao);
            setEstado(data.estado);
            setPreco(data.preco);
            setComprimento(data.comprimento);
            setLargura(data.largura);
            setCarga(data.carga);
            setFreio(data.freio);
            setCor(data.cor);
            }
        };

        fetchEstoque();

    }, [id]);
    
    //Dar o update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from('estoque').update({
        data_modificacao, documentacao, estado, preco, carga, comprimento, largura, freio, cor,
        }).eq('id', id);

        if (!error) {
        ////Registrar no relatórios
        await supabase.from('relatorios').insert([
            {
                tabela: 'estoque',
                tipo_acao: 'atualizado',
                id_item: id
            }
        ]);
        ////Registrar no relatórios
        alert("Estoque atualizado com sucesso!");
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
        <form onSubmit={handleUpdate}>
            <label htmlFor="data_modificacao">Data De Modificacao:</label>
            <br />
            <input type="text" id="data_modificacao" value={data_modificacao} onChange={(e) => setDataDeModificacao(e.target.value)} required/>
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
            <input type="text" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required/>
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
            <button type="submit">Atualizar Estoque</button>
        </form>
    </div>
    </>
    );
};

export default UpdateEstoque;
