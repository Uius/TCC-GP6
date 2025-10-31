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
          <a href="#" className="text-white bg-zinc-800 py-2 px-4 underline rounded-sm">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <a href="/perfil" className="uppercase text-base tracking-wide">USUÁRIO</a>
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
              <a href="/cadastrocliente" className="block">Cadastro de Clientes</a>
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
          <div className="text-black flex items-center gap-2">
            <a href="/ferramentas" className="block">Ferramentas</a>
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-6 w-6" />
          </div>
        </aside>

        {/* Divider vertical branco entre sidebar e main */}
        <div
          aria-hidden="true"
          className="w-[6px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
        />

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 bg-yellow-600 ml-72 p-10 min-h-[calc(100vh-5rem)] text-black flex flex-col items-center gap-10">
  
  {/* Imagem principal */}
  <section className="w-full max-w-5xl">
    <img
      src="/HOMEVAMOSLA.png"
      alt="Vamos Lá"
      className="w-full rounded-md object-cover shadow-lg"
    />
  </section>

  {/* Tutorial */}
  <section className="w-full max-w-5xl">
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center gap-6">
      
      <img
        src="/TUTORIAL.png"
        alt="Tutorial"
        className="w-full rounded-md"
      />

      <div className="w-full aspect-video">
        <video
          className="w-full h-full rounded-xl object-cover"
          controls
          poster="/TUMBNAIL.jpg"
        >
          <source src="/videos/tutorial.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  </section>

</main>
      </div>
    </div>
  )
}