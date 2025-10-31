"use client"

import { Zen_Old_Mincho } from "next/font/google";
import Image from "next/image";
import React, { use } from "react";
import { useMostrarSenha } from "@/hooks/useShowPass";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { isVisible, toggle, inputType } = useMostrarSenha();
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!cnpj.trim() || !password) {
      setError("Preencha CNPJ e senha.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cnpj: cnpj.trim(), password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "Erro ao autenticar.");
        setLoading(false);
        return;
      }

      if (!data?.user) {
        setError("Resposta inválida do servidor.");
        setLoading(false);
        return;
      }

      // garante salvar antes do redirecionamento
      sessionStorage.setItem("user", JSON.stringify(data.user));
      // substitui histórico e vai para a home
      router.replace("/");
    } catch (err) {
      console.error(err);
      setError("Erro de rede. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="h-143 bg-yellow-600 p-20 rounded-md shadow-lg bodyloguin">
        <div className="flex flex-col items-center mb-6 -mt-18">
          <Image
            src="/LOGOPRETO.png"
            alt="Logo Leão"
            width={280}
            height={280}
          />
        </div>
        <h3 className="text-center text-shadow-lg/30 text-white text-2xl font-semibold mb-6">SEJA BEM-VINDO (A)!</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="w-15 text-shadow-lg/30 font-bold block text-white mb-1">CNPJ:</label>
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              className="text-[#4B4B4B] rounded-[20] bg-sky-50 shadow-xl w-full p-2 border-white-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="  CNPJ: "
            />
          </div>
          <div>
            <label className="w-15 text-shadow-lg/30 font-bold block text-white mb-1">
              SENHA:
            </label>
            <div className="relative">
              <input
                type={inputType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[#4B4B4B] rounded-[20] bg-sky-50 shadow-xl w-full p-2 pr-10 border-white-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="  Senha: "
                id="senha"
              />
              <Image
                src={isVisible ? "/view.png" : "/hide.png"}
                alt={isVisible ? "Mostrar senha" : "Ocultar senha"}
                width={24}
                height={24}
                onClick={toggle}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>
            <p className="text-shadow-lg/30 block text-white mb-1 justify-self-end text-[15px] m-1 mt-4 underline"> Esqueceu sua senha? </p>
          </div>
          {error && <div className="text-red-100 bg-red-600 px-3 py-1 rounded">{error}</div>}
          <br />
          <div className="flex justify-between mt-2">
            <button
              type="submit"
              disabled={loading}
              className="font-bold rounded-[15] w-35 shadow-lg/30 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition disabled:opacity-60"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
            <button
              type="button"
              className="font-bold rounded-[15] w-35 shadow-lg/30 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
              onClick={() => { setCnpj(""); setPassword(""); setError(null); }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
