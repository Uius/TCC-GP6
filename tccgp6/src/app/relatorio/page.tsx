'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function RelatorioPage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen flex flex-col text-white">

      {/* HEADER (fixo) */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-neutral-900 flex justify-between items-center h-20 px-6">
        <img
          src="/LOGOBRANCA.png"
          alt="Logo"
          className="h-22 w-40 absolute left-6"
        />

        <div className="flex items-center gap-3 relative z-10 ml-20 pl-[180]">
          <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
          <span className="uppercase text-sm tracking-wide">USERNAME</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            <a href="/" className="text-white py-2 px-4">HOME</a>
            <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
            <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
          </nav>
          <div className="text-right text-xs leading-4">
            <div className="flex items-center">
              <img src="/ICONETEMPO.png" alt="Time" className="w-4 h-4 mr-2" />
              <div>{time}</div>
            </div>
            <div>{date}</div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO: wrapper com padding-top para o header fixo */}
      <div className="flex flex-1 overflow-hidden pt-20">

        {/* Sidebar (fixa abaixo do header) */}
        <aside className="fixed top-20 left-0 bottom-0 w-72 bg-yellow-600 flex flex-col justify-between p-4">
          <div>
            <nav className="space-y-4 text-black font-semibold">
              <div className="flex flex-row items-center">
                <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Cadastro de Clientes</a>
              </div>

              <div className="flex flex-row items-center bg-black/10 rounded-md p-2">
                <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/relatorio" className="block">Relatórios</a>
              </div>

              <div className="flex flex-row items-center">
                <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Orçamentos</a>
              </div>

              <div className="flex flex-row items-center">
                <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/notificacoes" className="block">Notificações</a>
              </div>
            </nav>
          </div>

          <div className="text-black flex items-center gap-2">
            <span className="text-sm">Ferramentas</span>
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-6 w-6" />
          </div>
        </aside>

        {/* Main Content — layout conforme imagem */}
        <main className="flex-1 bg-yellow-600 flex justify-center items-start p-10 overflow-auto min-h-0 ml-72">
          <section className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-5xl">
            <h2 className="text-4xl font-extrabold text-stone-900 mb-8">RELATÓRIOS:</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-stone-800 mb-2 uppercase">DIÁRIO</h3>
                <textarea
                  className="w-full h-28 border border-stone-300 rounded-md p-4 resize-none bg-white"
                  placeholder="Relatório diário..."
                />
              </div>

              <div>
                <h3 className="text-sm font-bold text-stone-800 mb-2 uppercase">SEMANAL</h3>
                <textarea
                  className="w-full h-28 border border-stone-300 rounded-md p-4 resize-none bg-white"
                  placeholder="Relatório semanal..."
                />
              </div>

              <div>
                <h3 className="text-sm font-bold text-stone-800 mb-2 uppercase">MENSAL</h3>
                <textarea
                  className="w-full h-28 border border-stone-300 rounded-md p-4 resize-none bg-white"
                  placeholder="Relatório mensal..."
                />
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  )
}