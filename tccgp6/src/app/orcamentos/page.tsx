"use client";

import React from "react";
import { useClock } from "@/hooks/useClock";

export default function OrcamentosPage() {
  const { time, date } = useClock();

  return (
    <div className="min-h-screen flex flex-col text-white bg-neutral-900">
      {/* HEADER */}
      {/* reduzir altura do header para 4rem (h-16) e ajustar padding */}
      <header className="bg-neutral-900 fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/LOGOBRANCA.png"
            alt="Logo"
            className="h-18 w-auto object-contain"
          />
        </div>

        {/* Menu principal */}
        <nav className="flex gap-8 text-base font-semibold">
          <a href="/" className=" text-white py-2 px-4 rounded-sm">
            HOME
          </a>
          <a href="/estoque" className="text-white py-2 px-4">
            ESTOQUE
          </a>
          <a href="/suporte" className="text-white py-2 px-4">
            SUPORTE
          </a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/ICONEPERFIL.png"
              alt="User Profile"
              className="w-8 h-8"
            />
           <a href="/perfil" className="uppercase text-base font-bold tracking-wide">USUÁRIO</a>
          </div>

          <div className="text-right text-sm leading-4">
            <div className="flex items-center justify-end">
              <img
                src="/ICONETEMPO.png"
                alt="Time"
                className="w-5 h-5 mr-2"
              />
              <span>{time}</span>
            </div>
            <span>{date}</span>
          </div>
        </div>
      </header>

      {/* CONTEÚDO - sidebar + main */}
      {/* ajustar padding-top para compensar o header menor (pt-16) */}
      <div className="flex flex-1 pt-16 min-h-0">
        {/* Sidebar (desktop) */}
        {/* sidebar fixa com top-16 e altura calculada para 4rem de header */}
        <aside className="w-72 bg-yellow-600 flex flex-col justify-between p-4 text-black h-[calc(100vh-4rem)] fixed top-16 left-0">
          {/* Menu lateral */}
          <nav className="space-y-5 font-semibold mt-6">
            <div className="flex items-center gap-2">
              <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
              <a href="/cadastrocliente" className="block">
                Cadastro de Clientes
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6" />
              <a href="/relatorio" className="block">Relatórios</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6" />
              <a href="/orcamentos" className="block underline">Orçamentos</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6" />
              <a href="/notificacoes" className="block">Notificações</a>
            </div>
          </nav>

          {/* Rodapé da sidebar */}
           <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <a href='/ferramentas' className="font-bold text-sm">Ferramentas</a>
          </div>
        </aside>

        {/* divisor fino */}
        {/* Linha branca fixa de 15px entre sidebar e main (visível a partir de md) */}
        <div
          className="hidden md:block fixed top-16 left-[18rem] h-[calc(100vh-4rem)] w-[15px] bg-white z-40"
          aria-hidden="true"
        />

        {/* Main */}
        {/* adiciona margem-left em md+ para não ficar sob a sidebar + divisor (18rem + 15px) */}
        <main className="flex-1 bg-yellow-600 overflow-auto min-h-0 p-8 lg:p-12 md:ml-[calc(18rem+15px)]">
          <div className="max-w-4xl mx-auto bg-white text-black rounded shadow-lg p-10">
            <h1 className="text-3xl font-extrabold mb-2">ORÇAMENTO</h1>
            <p className="text-sm text-gray-600 mb-6">Informações Gerais</p>

            <p className="text-yellow-600 font-semibold mb-6">
              Solicite um orçamento
            </p>

            <form className="grid grid-cols-12 gap-6">
              {/* Left column (form fields) */}
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div>
                  <label className="font-bold block text-sm mb-2">Nome</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="font-bold block text-sm mb-2">Email</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="font-bold block text-sm mb-2">Telefone</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="font-bold block text-sm mb-2">Endereço</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold block text-sm mb-2">Quantidade</label>
                    <input className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="font-bold block text-sm mb-2">Valor</label>
                    <input className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                </div>
              </div>

              {/* Right column (upload + descrição) */}
              <div className="col-span-12 lg:col-span-5 space-y-4">
                <div>
                  <label className="font-bold block text-sm mb-2">Descrição</label>
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
                    className="font-bold bg-red-600 text-white px-6 py-2 rounded"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="font-bold bg-yellow-600 text-white px-6 py-2 rounded"
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
