'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function HomePage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* HEADER */}
      <header className="bg-neutral-900 fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/LOGOBRANCA.png"
            alt="Logo"
            className="h-20 w-40 object-contain"
          />
        </div>

        {/* Menu principal */}
        <nav className="flex gap-8 text-base font-semibold">
          <a href="#" className="text-white py-2 px-4 rounded-sm">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <span className="uppercase text-base tracking-wide">USERNAME</span>
          </div>

          <div className="text-right text-sm leading-4">
            <div className="flex items-center justify-end">
              <img src="/ICONETEMPO.png" alt="Time" className="w-5 h-5 mr-2" />
              <span>{time}</span>
            </div>
            <span>{date}</span>
          </div>
        </div>
      </header>


      {/* CONTEÚDO GERAL */}
      <div className="flex flex-row w-full pt-20">
        {/* SIDEBAR */}
        <aside className="w-72 bg-yellow-600 flex flex-col justify-between p-4 text-black h-[calc(100vh-5rem)] fixed top-20 left-0">
          {/* Menu lateral */}
          <nav className="space-y-5 font-semibold mt-6">
            <div className="flex items-center gap-2">
              <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
              <a href="#" className="block">Cadastro de Clientes</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6" />
              <a href="/relatorio" className="block">Relatórios</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6" />
              <a href="/orcamentos" className="block">Orçamentos</a>
            </div>
            <div className="flex items-center gap-2">
              <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6" />
              <a href="/notificacoes" className="block">Notificações</a>
            </div>
          </nav>

          {/* Rodapé da sidebar */}
          <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <span className="text-sm font-medium">Ferramentas</span>
          </div>
        </aside>

        {/* Divider vertical branco entre sidebar e main */}
        <div
          aria-hidden="true"
          className="w-[6px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
        />

        {/* CONTEÚDO PRINCIPAL */}

         {/* MAIN */}
        <main className="flex-1 bg-yellow-600 overflow-y-auto p-8 xl:p-10">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-black mb-4">SUPORTE</h1>
            <p className="text-gray-700 mb-8">
              Está enfrentando problemas com o site?<br />
              Entre em contato com nossa equipe para que possamos ajudar a<br />
              resolver sua situação o mais rápido possível.
            </p>

            <div className="space-y-4">
              {[
                "Arthur Amatti Buzzete",
                "Maria Júlia Costa",
                "Mariana Cassiano Xavier Da Costa",
                "Victor Hugo Garcia Da Costa Marquezini",
                "William Feliks Rodrigues"
              ].map((name, index) => (
                <div key={index} className="flex items-center bg-gray-800 text-white rounded-lg p-4 shadow-lg hover:scale-[1.01] transition-transform">
                  <div className="w-16 h-16 bg-gray-400 rounded-md mr-4 flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">E-mail:</p>
                    <p className="text-sm">Telefone:</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Caso o profissional de suporte esteja indisponível, pedimos sua paciência e compreensão.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}