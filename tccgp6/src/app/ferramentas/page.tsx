'use client'

import React from 'react'
import {useClock} from '@/hooks/useClock'
import useFontSize, { FontSizeKey } from '@/hooks/useFontSize'

export default function FerramentaPage() {
  const { time, date } = useClock()
  const { size, setSize } = useFontSize()

  return (
    <div className="min-h-screen flex flex-col text-white bg-yellow-600">
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
          <a href="/" className="text-white bg-zinc-800 py-2 px-4 underline rounded-sm">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <a href="/perfil" className="uppercase text-base tracking-wide">USUARIO</a>
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

      {/* CONTEÚDO */}
      <div className="flex flex-1 overflow-hidden pt-20">
        {/* Sidebar */}
        <aside className="fixed top-20 left-0 bottom-0 w-72 bg-yellow-600 flex flex-col justify-between p-4">
          <div>
            <nav className="space-y-4 text-black font-semibold">
              <div className="flex flex-row items-center">
                <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Cadastro de Clientes</a>
              </div>
              <div className="flex flex-row items-center">
                <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="#" className="block">Relatórios</a>
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

           <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <span className="text-sm font-medium">Ferramentas</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-start p-12 overflow-auto min-h-0 ml-72">
          <section className="w-full max-w-5xl bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-10 border-8 border-yellow-600">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-black tracking-widest">
              FERRAMENTAS:
            </h2>

            {/* Seção Visual */}
            <div className="mb-10 border-2 border-black rounded-lg p-6 bg-white">
              <h3 className="text-2xl font-bold text-center mb-6 text-black">VISUAL</h3>
              <div className="space-y-6">
                {/* Linha: Escolher Tema */}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100">
                    <img src="/SOL.png" alt="Tema" className="w-8 h-8" />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <label className="text-black font-bold">Escolher Tema:</label>

                    <div className="relative">
                      <select
                        aria-label="Escolher Tema"
                        className="appearance-none bg-white text-black border border-gray-300 rounded px-4 py-2 pr-8 w-56"
                      >
                        <option>Claro</option>
                        <option>Escuro</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 w-4 h-4 text-gray-500 -translate-y-1/2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Linha: Tamanho da Letra */}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100">
                    <img src="/Aa.png" alt="Tamanho da Letra" className="w-8 h-6" />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <label className="text-black font-bold">Tamanho da Letra:</label>

                    <div className="relative">
                      <select
                        value={size}
                        onChange={(e) =>
                          setSize(e.target.value as FontSizeKey)
                        }
                        aria-label="Tamanho da Letra"
                        className="appearance-none bg-white text-black border border-gray-300 rounded px-4 py-2 pr-8 w-48"
                      >
                        <option value="small">Pequeno</option>
                        <option value="medium">Médio</option>
                        <option value="large">Grande</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 w-4 h-4 text-gray-500 -translate-y-1/2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção Ações */}
            <div className="border-2 border-black rounded-lg p-6 bg-white">
              <h3 className="text-2xl font-bold text-center mb-6 text-black">AÇÕES</h3>
              <div className="grid grid-cols-3 gap-6">
                <button className="flex flex-col items-center justify-center p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                  <div className="p-4 mb-3">
                    <img src="/NUVEM.png" alt="Importar/Exportar" className="w-15 h-12" />
                  </div>
                  <span className="text-sm font-semibold text-black text-center">
                    Importar/Exportar Dados
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                  <div className="p-4 mb-3">
                    <img src="/CALCULADORA.png" alt="Calculadora" className="w-12 h-15" />
                  </div>
                  <span className="text-sm font-semibold text-black text-center">
                    Calculadora Financeira
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-6 border rounded-lg bg-white shadow-md hover:shadow-lg">
                  <div className="p-4 mb-3">
                    <img src="/CODIGO.png" alt="Código" className="w-15 h-15" />
                  </div>
                  <span className="text-sm font-semibold text-black text-center">
                    Gerador de Etiqueta/Código
                  </span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}