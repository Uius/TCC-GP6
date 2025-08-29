'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function HomePage() {
  const { time, date } = useClock()

  return (
    <div className="h-auto text-white">

      {/* HEADER */}
      <header className="relative bg-neutral-900 flex justify-between items-center h-20 px-6">

        {/* Logo no header */}
        <img
          src="/LOGOBRANCA.png"
          alt="Logo"
          className="h-22 w-40 absolute left-6"
        />

        {/* USERNAME por cima da logo */}
        <div className="flex items-center gap-3 relative z-10 ml-20 pl-[180]">
          <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
          <span className="uppercase text-sm tracking-wide">USERNAME</span>
        </div>

        {/* Menu + Data/Hora */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            <a href="#" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
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

      {/* Conteúdo abaixo do header */}
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
                <a href="/notifica" className="block">Notificações</a>
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
          <section className="p-6 mb-6 bg-yellow-600 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <img src="/HOMEVAMOSLA.png" alt="Logo Empresa" className="h-160 w-348" />
            </div>
          </section>

          <section className="p-4 bg-yellow-600 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <img src="/TUTORIAL.png" alt="Tutorial" className="h-60 w-350" />
            </div>
            <iframe
              className="aspect-video w-350 mt-4"
              src="https://www.youtube.com/embed/DYl2STTuX-Q"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
        </main>
      </div>
    </div>
  )
}
