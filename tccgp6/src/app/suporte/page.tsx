'use client'
import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function HomePage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <header className="bg-neutral-900 flex items-center justify-between h-20 px-8 lg:px-12 xl:px-20 w-full fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/LOGOBRANCA.png" alt="Logo" className="h-14 w-auto max-w-[180px]" />
        </div>

        {/* Perfil */}
        <div className=" items-center place-content-end gap-3">
          <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
          <span className="uppercase text-sm tracking-wide">USERNAME</span>
        </div>

        {/* Navegação */}
        <div className=" items-center place-content-end gap-8">
          <nav className="flex gap-6 text-sm">
            <a href="/" className="text-white py-2 px-4 hover:underline transition">HOME</a>
            <a href="/estoque" className="text-white py-2 px-4 hover:underline transition">ESTOQUE</a>
            <a href="/suporte" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">SUPORTE</a>
          </nav>
          <div className="text-right text-xs leading-4">
            <div className="flex items-center justify-end">
              <img src="/ICONETEMPO.png" alt="Time" className="w-4 h-4 mr-2" />
              <div>{time}</div>
            </div>
            <div>{date}</div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex flex-1 pt-20 overflow-hidden">
        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col bg-yellow-600 p-5 w-64 lg:w-72 xl:w-80 overflow-y-auto">
          <nav className="space-y-4 text-black font-semibold">
            <div className="flex items-center hover:translate-x-1 transition-transform">
              <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2" />
              <a href="cadastro" className="block">Cadastro de Clientes</a>
            </div>
            <div className="flex items-center hover:translate-x-1 transition-transform">
              <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2" />
              <a href="relatorios" className="block">Relatórios</a>
            </div>
            <div className="flex items-center hover:translate-x-1 transition-transform">
              <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6 mr-2" />
              <a href="orcamentos" className="block">Orçamentos</a>
            </div>
            <div className="flex items-center hover:translate-x-1 transition-transform">
              <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6 mr-2" />
              <a href="notificacoes" className="block">Notificações</a>
            </div>
          </nav>

          <div className="text-black flex items-center gap-2 mt-6">
            <a href="ferramentas" className="block hover:translate-x-1 transition-transform">Ferramentas</a>
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-6 w-6" />
          </div>
        </aside>

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
                "Victor Hugo Garcia Da Costa Marquezzini",
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
