import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Relatorios: React.FC = () => {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate('/');
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>

            <button onClick={() => navigate('/editar')}>Voltar tela Editar</button>
            <br /><br />
            <h1>Relatórios</h1>
            <p>Esta página está em construção.</p>
            <p>Em breve, você poderá acessar relatórios detalhados sobre suas transações, incluindo gráficos e análises.</p>
    
        
        </div>
    );
};

export default Relatorios;