'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function FerramentaPage() {
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

      {/* CONTEÚDO */}
      <div className="flex flex-1 overflow-hidden pt-20">
        {/* Sidebar */}
        <aside className="fixed top-20 left-0 bottom-0 w-72 bg-yellow-600 flex flex-col justify-between p-4">
          <div>
            <nav className="space-y-4 text-black font-semibold">
              <div className="flex flex-row">
                <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Cadastro de Clientes</a>
              </div>
              <div className="flex flex-row">
                <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Relatórios</a>
              </div>
              <div className="flex flex-row">
                <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Orçamentos</a>
              </div>
              <div className="flex flex-row">
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

        {/* Main Content */}
        <main className="flex-1 bg-yellow-600 flex justify-center items-start p-10 overflow-auto min-h-0 ml-72">
          <section className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-black">FERRAMENTAS:</h2>

            {/* Seção Visual */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-black">VISUAL</h3>
              <div className="space-y-6">
                {/* Linha: Escolher Tema */}
                <div className="flex items-center gap-4">
                  {/* Espaço para imagem/ícone (substitua src pela sua imagem) */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100">
                    <img src="/SOL.png" alt="Tema" className="w-8 h-8" />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <label className="text-black font-medium">Escolher Tema:</label>

                    <div className="relative">
                      <select
                        aria-label="Escolher Tema"
                        className="appearance-none bg-white text-black border border-gray-300 rounded px-4 py-2 pr-8 w-56"
                      >
                        <option>Claro</option>
                        <option>Escuro</option>
                      </select>
                      {/* seta customizada */}
                      <svg className="pointer-events-none absolute right-3 top-1/2 w-4 h-4 text-gray-500 -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Linha: Tamanho da Letra */}
                <div className="flex items-center gap-4">
                  {/* Espaço para imagem/ícone (substitua src pela sua imagem) */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100">
                    <img src="/Aa.png" alt="Tamanho da Letra" className="w-8 h-6" />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <label className="text-black font-medium">Tamanho da Letra:</label>

                    <div className="relative">
                      <select
                        aria-label="Tamanho da Letra"
                        className="appearance-none bg-white text-black border border-gray-300 rounded px-4 py-2 pr-8 w-48"
                      >
                        <option>Pequeno</option>
                        <option> Médio</option>
                        <option>Grande</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 w-4 h-4 text-gray-500 -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção Ações */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">AÇÕES</h3>
              <div className="grid grid-cols-3 gap-4">
                
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <img src="/NUVEM.png" alt="Impressão" className="w-15 h-12 mb-2" />
                  <span className="text-lg text-black">Importar/Exportar Dados</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <img src="/CALCULADORA.png" alt="Organizar" className="w-8 h-12 mb-2" />
                  <span className="text-lg text-black">Calculadora Financeira</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <img src="/CODIGO.png" alt="Backup" className="w-12 h-12 mb-2" />
                  <span className="text-lg text-black">Gerador de etiqueta/Codigo</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}