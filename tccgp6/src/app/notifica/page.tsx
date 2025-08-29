'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function NotificacoesPage() {
  const { time, date } = useClock()

  return (
    <div className="h-auto text-white">

      {/* HEADER */}
      <header className="relative bg-neutral-900 flex justify-between items-center h-20 px-6">
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
            <a href="/notificacoes" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">NOTIFICAÇÕES</a>
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
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-72 bg-yellow-600 flex flex-col justify-between p-4">
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
<main className="flex-1 bg-yellow-600 flex justify-center items-start p-10 overflow-y-auto">
  <section className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
    <h2 className="text-2xl font-bold text-center mb-6">NOTIFICAÇÕES:</h2>

    <div className="space-y-4">
      {/* Card de notificação */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <div className="flex items-center gap-3">
          <img src="/ICONEALERTA.png" alt="Alerta" className="w-10 h-10" />
          <div>
            <p className="font-bold">ALERTA NO ESTOQUE</p>
            <p className="text-sm text-gray-600">
              O produto 'X' está apenas com 'Y' unidades!
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img src="/ICONEOLHO.png" alt="Detalhes" className="w-8 h-6 cursor-pointer" />
          <img src="/ICONEX.png" alt="Excluir" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Repete outros cards aqui */}
    </div>
  </section>
</main>


      </div>
    </div>
  )
}
