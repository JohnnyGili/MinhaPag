import React from "react";

// Define a tipagem das props, se estiver usando TypeScript
interface LoginWindowProps {
  estaAberto: boolean;
  estaFechando: () => void;
}

const LoginWindow: React.FC<LoginWindowProps> = ({ estaAberto, estaFechando }) => {
  // Se o modal não estiver aberto, retorna null para não renderizar nada
  if (!estaAberto) {
    return null;
  }

  return (
    // Div de fundo que cobre toda a tela; ao clicar nela, aciona a função para fechar o modal
    <div 
      className="modal-overlay" 
      onClick={estaFechando}  
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      {/* Div que contém o conteúdo do modal */}
      {/* O onClick abaixo evita que, ao clicar no conteúdo, o clique seja propagado para a overlay e feche o modal */}
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center"
        }}
      >
        <h2>Login</h2>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <input 
              type="text" 
              placeholder="Login" 
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input 
              type="password" 
              placeholder="Senha" 
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
            <button 
            onClick={() => window.location.href = "/card01"} 
            type="button" 
            style={{ backgroundColor: "green", color:"white", width: "100%", padding: "8px", marginBottom: "10px" }}
            >
            Logar
            </button>
        </form>
        {/* Botão para fechar o modal */}
        <button 
          onClick={estaFechando}
          style={{
            background: "red",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            borderRadius: "4px"
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default LoginWindow;
