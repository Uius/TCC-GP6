'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function RelatorioPage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen flex flex-col text-white">

      {/* HEADER (fixo) */}
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
          <a href="/" className="text-white py-2 px-4 rounded-sm">HOME</a>
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

      {/* CONTEÚDO: wrapper com padding-top para o header fixo */}
      <div className="flex flex-1 overflow-hidden pt-20">

    {/* Sidebar - agora com classes responsivas */}
  <aside className="hidden md:flex md:fixed md:top-20 md:left-0 md:bottom-0 md:w-72 bg-yellow-600 flex-col justify-between p-4">
          <div>
            <nav className="space-y-4 text-black font-semibold">
              <div className="flex flex-row items-center">
                <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/cadastrocliente" className="block">Cadastro de Clientes</a>
              </div>

              <div className="flex flex-row items-center rounded-md">
                <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/relatorio" className="block underline">Relatórios</a>
              </div>

              <div className="flex flex-row items-center">
                <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/orcamentos" className="block">Orçamentos</a>
              </div>

              <div className="flex flex-row items-center">
                <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/notificacoes" className="block">Notificações</a>
              </div>
            </nav>
          </div>

           <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <span className="text-sm font-medium">Ferramentas</span>
          </div>
        </aside>

  {/* Divider vertical entre sidebar e main (apenas md+) */}
  <div
          aria-hidden="true"
          className="w-[6px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
        />

        
        {/* Main Content - adaptado para mobile */}
        <main className="flex-1 bg-yellow-600 flex justify-center items-start p-4 md:p-10 overflow-auto min-h-0 md:ml-72">
          <section className="bg-white rounded-lg shadow-2xl p-4 md:p-10 w-full max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 mb-4 md:mb-8">RELATÓRIOS:</h2>

            <div className="space-y-4 md:space-y-8">
              <div>
                <h3 className="text-xs md:text-sm font-bold text-stone-800 mb-2 uppercase">DIÁRIO</h3>
                <textarea
                  className="w-full text-black h-24 md:h-28 border border-stone-300 rounded-md p-3 md:p-4 resize-none bg-white text-sm md:text-base"
                  placeholder="Relatório diário..."
                />
              
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Enviar</button>
              </div>

              <div>
                <h3 className="text-xs md:text-sm font-bold text-stone-800 mb-2 uppercase">SEMANAL</h3>
                <textarea
                  className="w-full h-24 text-black md:h-28 border border-stone-300 rounded-md p-3 md:p-4 resize-none bg-white text-sm md:text-base"
                  placeholder="Relatório semanal..."
                />

                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Enviar</button>
              </div>

              <div>
                <h3 className="text-xs md:text-sm font-bold text-stone-800 mb-2 uppercase">MENSAL</h3>
                <textarea
                  className="w-full h-24 text-black md:h-28 border border-stone-300 rounded-md p-3 md:p-4 resize-none bg-white text-sm md:text-base"
                  placeholder="Relatório mensal..."
                />

               <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Enviar</button>
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  )
}