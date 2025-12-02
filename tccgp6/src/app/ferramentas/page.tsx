'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'
import useFontSize, { FontSizeKey } from '@/hooks/useFontSize'

export default function FerramentaPage() {
  const { time, date } = useClock()
  const { size, setSize } = useFontSize()

  return (
    <div className="min-h-screen flex flex-col text-black bg-yellow-500  transition-colors duration-300">
      {/* HEADER */}
      <header className="bg-neutral-900 fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 px-8 text-white">
        <div className="flex items-center">
          <img src="/LOGOBRANCA.png" alt="Logo" className="h-20 w-40 object-contain" />
        </div>

        <nav className="flex gap-8 text-base font-semibold">
          <a href="/" className="py-2 px-4 hover:underline">HOME</a>
          <a href="/estoque" className="py-2 px-4 hover:underline">ESTOQUE</a>
          <a href="/suporte" className="py-2 px-4 hover:underline">SUPORTE</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <a href="/perfil" className="uppercase font-bold text-base tracking-wide">USUÁRIO</a>
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

      {/* LAYOUT */}
      <div className="flex flex-1 overflow-hidden pt-20">
        {/* SIDEBAR */}
        <aside className="fixed top-20 left-0 bottom-0 w-72 bg-yellow-500  flex flex-col justify-between p-4 text-black  transition-colors duration-300">
          <div>
            <nav className="space-y-4 font-semibold">
              <div className="flex flex-row items-center">
                <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2" />
                <a href="cadastrocliente">Cadastro de Clientes</a>
              </div>
              <div className="flex flex-row items-center">
                <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/relatorio">Relatórios</a>
              </div>
              <div className="flex flex-row items-center">
                <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6 mr-2" />
                <a href="orcamentos">Orçamentos</a>
              </div>
              <div className="flex flex-row items-center">
                <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6 mr-2" />
                <a href="/notificacoes">Notificações</a>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <a href="/ferramentas" className="font-bold underline text-sm">Ferramentas</a>
          </div>
        </aside>

        <div aria-hidden="true" className="w-[6px] bg-white  h-[calc(100vh-5rem)] fixed top-20 left-72 z-40" />

        {/* MAIN CONTENT */}
        <main className="flex-1 flex justify-center items-start p-12 overflow-auto min-h-0 ml-72">
          <section className="w-full max-w-5xl bg-white  rounded-xl p-10 border-8 border-gray-400  transition-colors duration-300">
            <h2 className="text-4xl font-extrabold text-center mb-8 tracking-widest">
              FERRAMENTAS:
            </h2>

            {/* VISUAL */}
            <div className="mb-10 border-2 border-gray-500  rounded-sm p-6 bg-white  transition-colors duration-300">
              <h3 className="text-2xl font-bold text-center mb-6">VISUAL</h3>
              <div className="space-y-6">
                {/* Escolher Tema */}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 d">
                    <img src="/SOL.png" alt="Tema" className="w-8 h-8" />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <label className="font-bold">Escolher Tema:</label>
                    <select
                      className="appearance-none bg-white  text-black  border border-gray-300  rounded px-4 py-2 pr-8 w-56"
                    >
                      <option value="light">Claro</option>
                      <option value="dark">Escuro</option>
                    </select>
                  </div>
                </div>

                {/* Tamanho da Letra */}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-100 ">
                    <img src="/Aa.png" alt="Tamanho da Letra" className="w-8 h-6" />
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <label className="font-bold">Tamanho da Letra:</label>
                    <select
                      value={size}
                      onChange={(e) => setSize(e.target.value as FontSizeKey)}
                      className="appearance-none bg-white text-black  border border-gray-300  rounded px-4 py-2 pr-8 w-48"
                    >
                      <option value="small">Pequeno</option>
                      <option value="medium">Médio</option>
                      <option value="large">Grande</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* AÇÕES */}
            <div className="border-2 border-gray-500  rounded-lg p-6 bg-white transition-colors duration-300">
              <h3 className="text-2xl font-bold text-center mb-6">AÇÕES</h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { img: '/NUVEM.png', label: 'Importar/Exportar Dados' },
                  { img: '/CALCULADORA.png', label: 'Calculadora Financeira' },
                  { img: '/CODIGO.png', label: 'Gerador de Etiqueta/Código' },
                ].map((item) => (
                  <button key={item.label} className="flex flex-col items-center justify-center p-6 border rounded-lg bg-white  shadow-xl hover:shadow-2xl transition-all">
                    <div className="p-4 mb-3">
                      <img src={item.img} alt={item.label} className="w-12 h-12" />
                    </div>
                    <span className="text-sm font-semibold text-black text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
