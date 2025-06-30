import React, { useState } from "react";
import { supabase } from "../supaBaseConnection";

interface LoginWindowProps {
  estaAberto: boolean;
  estaFechando: () => void;
}

const LoginWindow: React.FC<LoginWindowProps> = ({ estaAberto, estaFechando }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  if (!estaAberto) {
    return null;
  }

  const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: login,
    password: senha,
  });

  if (error || !data.user) {
    alert("Login inválido");
    return;
  }
  window.location.href = "/editar";
};

  return (
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
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "30px 40px",
          borderRadius: "8px",
          width: "500px",
          position: "relative",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          maxHeight: "90vh",
          overflowY: "auto"
        }}
      >
        {/* Botão de fechar (X) */}
        <button 
          onClick={estaFechando}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer"
          }}
        >
          &times;
        </button>

        <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>Acesso Login</h2>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "16px" }}>
              Login:
            </label>
            <input 
              type="email" 
              placeholder="Digite seu email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                textAlign: "left"
              }}
            />
          </div>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold", fontSize: "16px" }}>
              Senha:
            </label>
            <input 
              type="password" 
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                textAlign: "left"
              }}
            />
          </div>
          <button 
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginWindow;