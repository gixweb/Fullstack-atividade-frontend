"use client";
import Link from "next/link";
import { useState } from "react";

export default function CadastroForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cadastro realizado: ${nome}, ${email}`);
  };

  try {
    const response = await fetch("http://localhost:8080/api/CadastroEndpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
    });

    const data = await response.json();
    console.log("Resposta do backend:", data);
    
    // Adicione aqui a lógica após o cadastro (redirecionamento, etc.)
  } catch (error) {
    console.error("Erro no cadastro:", error);
  }
};

  return (
    <form
      className="flex-col align-middle justify-center"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="border rounded w-full p-2"
        />
      </div>
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 shadow-md text-white px-[50px] py-2 rounded"
        >
          Cadastrar
        </button>
      </div>
      <p className="mt-4 text-sm">
        Já tem uma conta?
        <Link href="/login" className="ml-1 text-blue-600 underline">
          Faça Login
        </Link>
      </p>
    </form>
  );
}