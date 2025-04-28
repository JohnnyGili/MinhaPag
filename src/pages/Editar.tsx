import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

// Tipos dos dados
interface Pedido {
    idPedido: number;
    nomeCliente: string;
    emailCliente: string;
    telefoneCliente: string;
    cargasDisponibilizados: string;
    tamanhoComprimento: string;
    nomeCor: string;
    tamanhoLargura: string;
    nomeFreio: string;
}

interface Estoque {
    idPrancha: number;
    dataDeModificacao: string;
    documentacao: string;
    estadoConservacao: string;
    preco: number;
    cargasDisponibilizados: string;
    tamanhoComprimento: string;
    nomeCor: string;
    tamanhoLargura: string;
    nomeFreio: string;
}

const Editar: React.FC = () => {
    const navigate = useNavigate();
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [estoque, setEstoque] = useState<Estoque[]>([]);

    const handleVoltar = () => {
        navigate('/');
    };

    useEffect(() => {
        // Dados simulados para PEDIDOS
        const pedidosFake: Pedido[] = [
            { idPedido: 52, nomeCliente: 'Maria Oliveira', emailCliente: 'maria@example.com', telefoneCliente: '987654321', cargasDisponibilizados: '25t', tamanhoComprimento: '15m', nomeCor: 'preto', tamanhoLargura: '3m', nomeFreio: 'disco' },
            { idPedido: 53, nomeCliente: 'Carlos Souza', emailCliente: 'carlos@example.com', telefoneCliente: '123123123', cargasDisponibilizados: '33t', tamanhoComprimento: '20m', nomeCor: 'branco', tamanhoLargura: '3.2m', nomeFreio: 'abs' },
            { idPedido: 54, nomeCliente: 'Ana Lima', emailCliente: 'ana@example.com', telefoneCliente: '321321321', cargasDisponibilizados: '12t', tamanhoComprimento: '15m', nomeCor: 'amarelo', tamanhoLargura: '2.5m', nomeFreio: 'disco' },
            { idPedido: 55, nomeCliente: 'Pedro Rocha', emailCliente: 'pedro@example.com', telefoneCliente: '456456456', cargasDisponibilizados: '25t', tamanhoComprimento: '11m', nomeCor: 'preto', tamanhoLargura: '3m', nomeFreio: 'ar' },
            { idPedido: 56, nomeCliente: 'Fernanda Costa', emailCliente: 'fernanda@example.com', telefoneCliente: '789789789', cargasDisponibilizados: '33t', tamanhoComprimento: '20m', nomeCor: 'branco', tamanhoLargura: '3.2m', nomeFreio: 'abs' },
            { idPedido: 57, nomeCliente: 'Lucas Almeida', emailCliente: 'lucas@example.com', telefoneCliente: '147258369', cargasDisponibilizados: '12t', tamanhoComprimento: '15m', nomeCor: 'preto', tamanhoLargura: '2.5m', nomeFreio: 'disco' },
            { idPedido: 58, nomeCliente: 'Juliana Santos', emailCliente: 'juliana@example.com', telefoneCliente: '963852741', cargasDisponibilizados: '25t', tamanhoComprimento: '11m', nomeCor: 'amarelo', tamanhoLargura: '3m', nomeFreio: 'ar' },
            { idPedido: 59, nomeCliente: 'Gabriel Melo', emailCliente: 'gabriel@example.com', telefoneCliente: '159753456', cargasDisponibilizados: '33t', tamanhoComprimento: '20m', nomeCor: 'branco', tamanhoLargura: '3.2m', nomeFreio: 'disco' },
            { idPedido: 60, nomeCliente: 'Beatriz Lima', emailCliente: 'beatriz@example.com', telefoneCliente: '951753456', cargasDisponibilizados: '12t', tamanhoComprimento: '11m', nomeCor: 'preto', tamanhoLargura: '2.5m', nomeFreio: 'abs' },
        ];

        // Dados simulados para ESTOQUE
        const estoqueFake: Estoque[] = [
            { idPrancha: 22, dataDeModificacao: '2024-01-01', documentacao: '9BRDEF1234A100001', estadoConservacao: 'Novo', preco: 205000, cargasDisponibilizados: '12t', tamanhoComprimento: '11m', nomeCor: 'Branca', tamanhoLargura: '2.5m', nomeFreio: 'Ar' },
            { idPrancha: 23, dataDeModificacao: '2024-02-15', documentacao: '9BRDEF1234A100002', estadoConservacao: 'Usado', preco: 207000, cargasDisponibilizados: '25t', tamanhoComprimento: '15m', nomeCor: 'Amarelo', tamanhoLargura: '3m', nomeFreio: 'Disco' },
            { idPrancha: 24, dataDeModificacao: '2024-03-20', documentacao: '9BRDEF1234A100003', estadoConservacao: 'Reformado', preco: 210000, cargasDisponibilizados: '33t', tamanhoComprimento: '20m', nomeCor: 'Preto', tamanhoLargura: '3.2m', nomeFreio: 'Abs' },
            { idPrancha: 25, dataDeModificacao: '2024-04-10', documentacao: '9BRDEF1234A100004', estadoConservacao: 'Novo', preco: 212000, cargasDisponibilizados: '12t', tamanhoComprimento: '15m', nomeCor: 'Branca', tamanhoLargura: '2.5m', nomeFreio: 'Ar' },
            { idPrancha: 26, dataDeModificacao: '2024-05-25', documentacao: '9BRDEF1234A100005', estadoConservacao: 'Usado', preco: 215000, cargasDisponibilizados: '25t', tamanhoComprimento: '20m', nomeCor: 'Amarelo', tamanhoLargura: '3.2m', nomeFreio: 'Disco' },
            { idPrancha: 27, dataDeModificacao: '2024-07-01', documentacao: '9BRDEF1234A100006', estadoConservacao: 'Reformado', preco: 218000, cargasDisponibilizados: '33t', tamanhoComprimento: '11m', nomeCor: 'Preto', tamanhoLargura: '3m', nomeFreio: 'Abs' },
            { idPrancha: 28, dataDeModificacao: '2024-08-12', documentacao: '9BRDEF1234A100007', estadoConservacao: 'Novo', preco: 220000, cargasDisponibilizados: '12t', tamanhoComprimento: '15m', nomeCor: 'Branca', tamanhoLargura: '3m', nomeFreio: 'Ar' },
            { idPrancha: 29, dataDeModificacao: '2024-09-18', documentacao: '9BRDEF1234A100008', estadoConservacao: 'Usado', preco: 223000, cargasDisponibilizados: '25t', tamanhoComprimento: '20m', nomeCor: 'Amarelo', tamanhoLargura: '2.5m', nomeFreio: 'Disco' },
            { idPrancha: 30, dataDeModificacao: '2024-10-25', documentacao: '9BRDEF1234A100009', estadoConservacao: 'Reformado', preco: 225000, cargasDisponibilizados: '33t', tamanhoComprimento: '11m', nomeCor: 'Preto', tamanhoLargura: '3.2m', nomeFreio: 'Abs' },
            { idPrancha: 31, dataDeModificacao: '2024-11-13', documentacao: '9BRDEF1234A100010', estadoConservacao: 'Novo', preco: 209000, cargasDisponibilizados: '25t', tamanhoComprimento: '20m', nomeCor: 'Branca', tamanhoLargura: '3m', nomeFreio: 'Ar' },
        ];

        setPedidos(pedidosFake);
        setEstoque(estoqueFake);
    }, []);

    return (
        <div style={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>

            <BackButton onClick={handleVoltar} />

            <section style={{ marginTop: '80px' }}>
                <h1>Pedidos</h1>
                {/* Tabela de Pedidos */}
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>ID</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Nome</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Email</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Telefone</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Carga</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Comprimento</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Cor</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Largura</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Freio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((pedido) => (
                            <tr key={pedido.idPedido}>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.idPedido}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.nomeCliente}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.emailCliente}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.telefoneCliente}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.cargasDisponibilizados}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.tamanhoComprimento}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.nomeCor}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.tamanhoLargura}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{pedido.nomeFreio}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </section>

            {/* Tabela de Estoque */}
            <section style={{ marginTop: '50px' }}>
                <h1>Lista do Estoque</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>ID</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Data Modificação</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Documentação</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Estado</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Preço</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Carga</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Comprimento</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Cor</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Largura</th>
                            <th style={{ border: '1px solid black', textAlign: 'center' }}>Freio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estoque.map((item) => (
                            <tr key={item.idPrancha}>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.idPrancha}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.dataDeModificacao}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.documentacao}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.estadoConservacao}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>R$ {item.preco.toLocaleString()}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.cargasDisponibilizados}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.tamanhoComprimento}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.nomeCor}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.tamanhoLargura}</td>
                                <td style={{ border: '1px solid black', textAlign: 'center' }}>{item.nomeFreio}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </section>
        </div>
    );
};

export default Editar;