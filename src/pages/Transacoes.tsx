import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/tables.css";
import { supabase } from '../supaBaseConnection';

const Transacoes: React.FC = () => {
    const navigate = useNavigate();

    ////Pesquisar Transacoes
        const [buscaTransacoes, setBuscaTransacoes] = useState('');

        const filtrarTransacoes = async () => {
        const { data, error } = await supabase
            .from('transacoes')
            .select('*')
            .or(`nome_transacoes.ilike.%${buscaTransacoes}%`);

        if (error) {
            console.error('Erro ao buscar Transacoes:', error);
        } else {
            setTransacoes(data || []);
            setBuscaTransacoes('');
        }
        };
    ////Pesquisar Transacoes


    ////View Transacoes
        const [transacoes, setTransacoes] = useState<any[]>([]);
        const ViewTransacoes = async () => {
            let { data: dadosTransacoes } = await supabase.from('transacoes').select('*');
            setTransacoes(dadosTransacoes || []);
        }
        useEffect(() => {
            ViewTransacoes();
        }, [])
    ////View Transacoes

    return (
        <>
            <header>
                <div style={{ position: 'relative', padding: '20px' }}>
                    <br />
                    <ul className="flex gap-1">
                        <li>
                            <button className='btn-primary' onClick={() => navigate('/')}>Voltar</button>
                        </li>
                        <li>
                            <button className='btn-primary' onClick={() => navigate('/editar')}>Pedidos</button>
                        </li>
                        <li>
                            <button className='btn-primary' onClick={() => navigate('/estoque')}>Estoque</button>
                        </li>
                        <li>
                            <button className='btn-primary' onClick={() => navigate('/transacoes')}>Transações</button>
                        </li>
                        <li>
                            <button className='btn-primary' onClick={() => navigate('/relatorios')}>Relatórios</button>
                        </li>
                    </ul>                   
                </div>
            </header>

            <div>                    
                {/* TABELA TRANSACOES */}
                <br />
                <ul className="flex gap-1">
                    <li>
                        <h2>Histórico de Transações</h2>
                    </li>
                    <li>
                        <input type='text' placeholder='Buscar por Criador de Pedidos' value={buscaTransacoes} onChange={(e) => setBuscaTransacoes(e.target.value)} style={{ width: '400px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}/>
                        <a onClick={filtrarTransacoes} style={{ padding: '20px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <br />
                <table className="tables">
                    <thead>
                        <tr>
                            <th>ID do Pedido</th>       
                            <th>Criador do Pedido</th>
                            <th>Identificação Prancha</th>
                            <th>Data da Transação</th>
                        </tr>
                        </thead>
                        <tbody>
                        {transacoes.map((t, index) => (
                            <tr key={index}>
                            <td>{t.pedido_id}</td>
                            <td>{t.nome_transacoes}</td>
                            <td>{t.id_prancha}</td>
                            <td>{new Date(t.data).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </>
    );
};

export default Transacoes;