"use client";

import React from "react";
import { useClock } from "@/hooks/useClock";

export default function OrcamentosPage() {
  const { time, date } = useClock();

  return (
    <div className="min-h-screen flex flex-col text-white bg-neutral-900">
      {/* HEADER */}
   <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 flex items-center justify-between h-20 px-10 shadow-md">
  {/* LOGO */}
  <div className="flex items-center gap-4">
    <img src="/LOGOBRANCA.png" alt="Logo" className="h-14 w-auto" />
  </div>

  {/* MENU + HORA */}
  <div className="flex items-center gap-10">
    {/* MENU */}
    <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide ">
      <a href="/" className="text-white hover:text-yellow-500 transition">
        Home
      </a>
      <a href="/estoque" className="text-white hover:text-yellow-500">
        Estoque
      </a>
      <a href="/suporte" className="text-white hover:text-yellow-500">
        Suporte
      </a>
    </nav>

    {/* HORA E DATA */}
    <div className="text-right text-xs leading-4 hidden md:block">
      <div className="flex items-center gap-2 justify-end">
        <img src="/ICONETEMPO.png" alt="Time" className="w-4 h-4 mr-2 lg:w-5 lg:h-5" />
        <div>{time}</div>
      </div>
      <div>{date}</div>
    </div>
  </div>
</header>


      {/* CONTEÚDO GERAL */}
      <div className="pt-20 w-full flex">
        {/* SIDEBAR (mesma estrutura e cor da base) */}
        <aside className="hidden md:flex flex-col w-64 bg-[#c47b00] text-black p-6 sticky top-20 h-[calc(100vh-80px)]">
          <div className="flex-1">
            <nav className="space-y-6 font-semibold">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
                </div>
                <a href="#">Cadastro de Clientes</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6" />
                </div>
                <a href="#">Relatórios</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6" />
                </div>
                <a href="#">Orçamentos</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6" />
                </div>
                <a href="/notificacoes">Notificações</a>
              </div>
            </nav>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="w-6 h-6" />
            <span className="text-sm">Ferramentas</span>
          </div>
        </aside>

        {/* LINHA DIVISÓRIA */}
        <div className="hidden md:block md:w-px bg-black/30" />

        {/* MAIN (sem alterar cor, mesma base da home) */}
        <main className="flex-1 bg-[#c47b00] overflow-auto p-8 lg:p-12">
          <div className="max-w-5xl mx-auto bg-white text-black rounded shadow-lg p-10">
            <h1 className="text-3xl font-extrabold mb-2">ORÇAMENTO</h1>
            <p className="text-sm text-gray-600 mb-6">Informações Gerais</p>

            <p className="text-yellow-700 font-semibold mb-6">
              Solicite um orçamento
            </p>

            <form className="grid grid-cols-12 gap-6">
              {/* Coluna Esquerda */}
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div>
                  <label className="block text-sm mb-2">Nome</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Telefone</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Endereço</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Quantidade</label>
                    <input className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Valor</label>
                    <input className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                </div>
              </div>

              {/* Coluna Direita */}
              <div className="col-span-12 lg:col-span-5 space-y-4">
                <div>
                  <label className="block text-sm mb-2">Descrição</label>
                  <input
                    className="w-full border rounded px-3 py-2 text-sm"
                    placeholder="Descrição"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Upload de arquivos</label>
                  <div className="w-full h-36 border-2 border-dashed rounded bg-gray-50 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <svg
                        className="mx-auto mb-2 w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16v-4a4 4 0 118 0v4m-5-4v4m0 0h6"
                        />
                      </svg>
                      <div className="text-sm">Upload de arquivos</div>
                      <div className="text-xs text-gray-500">
                        Fotos, documentos, arquivos etc.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button
                    type="button"
                    className="bg-red-600 text-white px-6 py-2 rounded"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-600 text-black px-6 py-2 rounded"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
