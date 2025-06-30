import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/tables.css";
import { supabase } from '../supaBaseConnection';

const Relatorios: React.FC = () => {
  const navigate = useNavigate();

  const [relatorios, setRelatorios] = useState<any[]>([]);
  const [buscaRelatorio, setBuscaRelatorio] = useState('');

  const buscarRelatorios = async () => {
    const { data, error } = await supabase
      .from('relatorios')
      .select('*')
      .or(`tabela.ilike.%${buscaRelatorio}%,tipo_acao.ilike.%${buscaRelatorio}%`)
      .order('data', { ascending: false });

    if (!error) setRelatorios(data || []);
    setBuscaRelatorio('');
  };

  useEffect(() => {
    buscarRelatorios();
  }, []);

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
                {/* TABELA RELATORIOS */}
                <br />
                <ul className="flex gap-1">
                    <li>
                        <h2>Relatórios: Histórico de Ações</h2>
                    </li>
                    <li>
                        <input type='text' placeholder='Buscar por Tabela ou Ação' value={buscaRelatorio} onChange={(e) => setBuscaRelatorio(e.target.value)} style={{ width: '400px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}/>
                        <a onClick={buscarRelatorios} style={{ padding: '20px'}}>
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
                        <th>Tabela</th>
                        <th>Ação</th>
                        <th>ID do Item</th>
                        <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {relatorios.map((r, i) => (
                        <tr key={i}>
                            <td>{r.tabela}</td>
                            <td>{r.tipo_acao}</td>
                            <td>{r.id_item}</td>
                            <td>{new Date(r.data).toLocaleString()}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Relatorios;
