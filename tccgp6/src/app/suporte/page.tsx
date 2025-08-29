'use client'
import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function HomePage() {
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
            <a href="/suporte" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">SUPORTE</a>
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

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-yellow-600 flex flex-col justify-between p-4">
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
                <a href="#" className="block">Notificações</a>
              </div>
            </nav>
          </div>
          <div className="text-black flex items-center gap-2">
            <span className="text-sm">Ferramentas</span>
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-6 w-6" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-yellow-600 p-8">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
            <h1 className="text-4xl font-bold text-black mb-4">SUPORTE</h1>
            <p className="text-gray-700 mb-8">
              Está enfrentando problemas com o site?<br />
              Entre em contato com nossa equipe para que possamos ajudar a<br></br> resolver sua situação o mais rápido possível.
            </p>

            <div className="space-y-4">
              {["Arthur Amatti Buzzete", "Maria Júlia Costa", "Mariana Cassiano Xavier Da Costa", "Victor Hugo Garcia Da Costa Marquezzini", "William Feliks Rodrigues"].map((name, index) => (
                <div key={index} className="flex items-center bg-gray-800 text-white rounded-lg p-4 shadow-lg">
                  <div className="w-16 h-16 bg-gray-400 rounded-md mr-4"></div>
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
