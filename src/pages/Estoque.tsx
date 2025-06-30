import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/tables.css";
import { supabase } from '../supaBaseConnection';

const Estoque: React.FC = () => {
    const navigate = useNavigate();

    ////Pesquisar Estoque
    const [buscaEstoque, setBuscaEstoque] = useState('');

    const filtrarEstoque = async () => {
        const { data, error } = await supabase.from('estoque').select('*').or(`documentacao.ilike.%${buscaEstoque}%,estado.ilike.%${buscaEstoque}%`);

        if (error) {
            console.error('Erro ao buscar estoque:', error);
        } else {
            setEstoque(data || []);
            setBuscaEstoque('');
        }
    };
    ////Pesquisar Estoque

    ////View Estoque
        const [estoque, setEstoque] = useState<any[]>([]);
        const ViewEstoque = async () => {
            let { data: dadosEstoque } = await supabase.from('estoque').select('*');
            setEstoque(dadosEstoque || []);
        }
        useEffect(() => {
            ViewEstoque();
        }, [])
    ////View Estoque

    ////Deletar Estoque
    const deletarEstoque = async (id: number) => {
    const confirmar = window.confirm('Tem certeza que deseja excluir esta prancha?');

    if (!confirmar) return;

    const { error } = await supabase.from('estoque').delete().eq('id', id);

    if (error) {
        alert('Erro ao deletar prancha');
        console.error(error);
    } else {
        ////Registrar no relatórios
        await supabase.from('relatorios').insert([
            {
                tabela: 'estoque',
                tipo_acao: 'deletado',
                id_item: id
            }
        ]);
        ////Registrar no relatórios
        alert('Prancha deletado com sucesso!');
        ViewEstoque(); // recarrega a lista atualizada
    }
    };
    ////Deletar Estoque

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
                {/* TABELA ESTOQUE */}
                <br />
                <ul className="flex gap-1">
                    <li>
                        <h2>Pesquisa de Estoque</h2>
                    </li>
                    <li>
                        <input type='text' placeholder='Buscar por Documentação, Estado ou Preço' value={buscaEstoque} onChange={(e) => setBuscaEstoque(e.target.value)} style={{ width: '400px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}/>
                        <a onClick={filtrarEstoque} style={{ padding: '20px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <button className='btn-primary' onClick={() => navigate('/createEstoque')}>Adicionar Prancha</button>
                    </li>
                </ul>
                <br />
                <table className='tables'>
                    <thead>
                        <tr>
                            <th>Data de Modificação</th>
                            <th>Documentação</th>
                            <th>Estado</th>
                            <th>Preço</th>
                            <th>Carga</th>
                            <th>Comprimento</th>
                            <th>Cor</th>
                            <th>Largura</th>
                            <th>Freio</th>
                            <th>Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        {estoque.map((p, index) => (
                            <tr key={index}>
                                <td>{p.data_modificacao}</td>
                                <td>{p.documentacao}</td>
                                <td>{p.estado}</td>
                                <td>{p.preco}</td>
                                <td>{p.carga}</td>
                                <td>{p.comprimento}</td>
                                <td>{p.cor}</td>
                                <td>{p.largura}</td>
                                <td>{p.freio}</td>
                                <td className="flex gap-1">
                                    <a onClick={() => navigate(`/updateEstoque/${p.id}`)}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-pencil' viewBox='0 0 16 16'>
                                        <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325'/>
                                        </svg> 
                                    </a>
                                    <a onClick={() => deletarEstoque(p.id)}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-trash-fill' viewBox='0 0 16 16'>
                                        <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0'/>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Estoque;