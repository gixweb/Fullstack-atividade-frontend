"use client";
import { useState } from "react";

export default function LoginForm() {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
try{
    const handleLogin = () =>{
        fetch("http://localhost:8080/api/LoginProject", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, senha }),
          })
            .then(res => res.json())
            .then(data => {
                console.log("Resposta do backend:", data);
            })
        }
    }
    catch(error : any) {
            console.error("Erro no login:", error);
    
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
                className="border rounded w-full p-2"/>
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
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}
                >Entrar
                </button>
                </form>
                );
            }