"use client";
import { useState } from "react";

export default function LoginForm() {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
try{
    const response = await fetch("http://localhost:8080/api/LoginProject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, sgenha }),
          })
          if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
          }
    
          const data = await response.json();
          console.log("Login bem-sucedido:", data);
          
          // Redirecionar ou atualizar o estado após login bem-sucedido
        } catch (error) {
          console.error("Falha no login:", error);
          // Mostrar mensagem de erro para o usuário
        }
      };
      return (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="border rounded w-full p-2"
            />
          </div>
          
          {error && <div className="text-red-500 mb-4">{error}</div>}
          
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Entrar
          </button>
        </form>
      );
    }