import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supaBaseConnection';

const UpdatePedido = () => {
    const { id } = useParams();
    //Pega Id da Url
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [largura, setLargura] = useState('');
    const [carga, setCarga] = useState('');
    const [freio, setFreio] = useState('');
    const [cor, setCor] = useState('');

    // Busca o pedido pelo ID e coloca os dados nos campos 
    useEffect(() => {
        const fetchPedido = async () => {
        const { data } = await supabase.from('pedido').select('*').eq('id', id).single();
        if (data) {
            setNome(data.nome);
            setEmail(data.email);
            setTelefone(data.telefone);
            setComprimento(data.comprimento);
            setLargura(data.largura);
            setCarga(data.carga);
            setFreio(data.freio);
            setCor(data.cor);
            }
        };

        fetchPedido();

    }, [id]);
    
    //Dar o update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const { error } = await supabase.from('pedido').update({
        nome, email, telefone, carga, comprimento, largura, freio, cor,
        }).eq('id', id);

        if (!error) {
        alert("Pedido atualizado com sucesso!");
        navigate('/editar'); // volta pra Home
        }
    };

  return (
    <form onSubmit={handleUpdate}>
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
    );
};

export default UpdatePedido;
