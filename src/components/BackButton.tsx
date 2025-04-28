import React from "react";

type BackButtonProps = {
    onClick: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: 'rgb(60, 60, 60)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
        }}
    >
        Voltar
    </button>
);

export default BackButton;