'use client'

import React, { useState } from 'react'
import { useClock } from '@/hooks/useClock'

export function ResponsiveNav({ sidebar, open, setOpen }: { sidebar: React.ReactNode, open: boolean, setOpen: (v:boolean)=>void }) {
  return (
    <>
      {/* Sidebar visível em md+ */}
      <div className="hidden md:block">
        {sidebar}
      </div>

      {/* Bottom nav apenas em mobile */}
      <div className="md:hidden">
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-yellow-500 rounded-full px-4 py-2 shadow-lg flex gap-4">
          <a href="#" className="flex flex-col items-center text-black text-xs">
            <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
            <span>Clientes</span>
          </a>
          <a href="/notificacoes" className="flex flex-col items-center text-black text-xs">
            <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6" />
            <span>Notifs</span>
          </a>
          <a href="/ferramentas" className="flex flex-col items-center text-black text-xs">
            <img src="/ICONECONFIG.png" alt="" className="w-6 h-6" />
            <span>Ferram.</span>
          </a>
        </div>

        {/* espaço para não cobrir conteúdo */}
        <div className="h-20" />
      </div>

      {/* Mobile off-canvas sidebar + overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 left-0 z-50 w-64 md:hidden transform transition-transform duration-300">
            <div className="h-full">
              <div className="flex items-center justify-end p-2">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 rounded bg-yellow-500 text-black"
                >
                  ✕
                </button>
              </div>
              {/* Renderiza o mesmo conteúdo da sidebar */}
              <div className="h-[calc(100vh-56px)] overflow-auto">
                {sidebar}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default function HomePage() {
  const { time, date } = useClock()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebar = (
    // Ajustes: sidebar sticky a partir de md para não ficar sob o header fixo
    <aside className="w-64 lg:w-56 xl:w-64 bg-yellow-600 flex flex-col justify-between p-4 h-screen md:sticky md:top-20 md:h-[calc(100vh-80px)] text-black">
      <div>
        <nav className="space-y-4 text-black font-semibold">
          <div className="flex items-center gap-2">
            <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
            <a href="#" className="block">Cadastro de Clientes</a>
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
      </div>

      <div className="text-black flex items-center gap-2">
        <span className="text-sm lg:text-base">Ferramentas</span>
        <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-6 w-6 lg:h-7 lg:w-7" />
      </div>
    </aside>
  )

  return (
    <div className="min-h-screen text-white">

      {/* HEADER */}
      <header className="bg-neutral-900 fixed top-0 left-0 w-full z-50 flex items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo: tamanho responsivo, maior em lg/xl */}
        <div className="flex items-center">
          <img
            src="/LOGOBRANCA.png"
            alt="Logo"
            className="h-10 sm:h-25 w-45"
          />
        </div>

        {/* espaço entre logo e resto */}
        <div className="flex-1" />

        {/* BOTÃO HAMBURGER MOBILE */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            className="p-2 rounded bg-gray-800 text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* USER + Menu + Data/Hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8 lg:w-9 lg:h-9" />
            <span className="uppercase text-sm tracking-wide lg:text-base">USERNAME</span>
          </div>

          <nav className="hidden sm:flex gap-6 text-sm lg:gap-8 lg:text-base">
            <a href="#" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
            <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
            <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
          </nav>

          <div className="text-right text-xs leading-4 lg:text-sm">
            <div className="flex items-center">
              <img src="/ICONETEMPO.png" alt="Time" className="w-4 h-4 mr-2 lg:w-5 lg:h-5" />
              <div>{time}</div>
            </div>
            <div>{date}</div>
          </div>
        </div>
      </header>

      {/* Conteúdo abaixo do header */}
      <div className="w-full flex">
        {/* Sidebar responsiva (md+) e off-canvas mobile */}
        <ResponsiveNav sidebar={sidebar} open={mobileOpen} setOpen={setMobileOpen} />

        {/* Divisor vertical (apenas desktop) - mais estreito */}
        <div className="hidden lg:block w-1 bg-white/100" />

        {/* Main: compensamos o header fixo com pt; container usa toda largura disponível */}
        <main className="flex-1 bg-yellow-600 p-8 pt-24 lg:pt-28 min-h-screen text-base lg:text-lg">
          <div className="w-full px-6 lg:px-10">
            {/* conteúdo exemplo */}
            <section className="p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start justify-start gap-6 lg:items-start">
                <img
                  src="/HOMEVAMOSLA.png"
                  alt="Logo Empresa"
                  className="w-full h-auto object-cover md:h-[420px] lg:h-[540px] xl:h-[620px]"
                />
              </div>
            </section>
            <section className="p-6">
              <div className="flex flex-col md:flex-row items-start justify-start gap-6">
                <img
                  src="/TUTORIAL.png"
                  alt="Tutorial"
                  className="w-full h-auto md:h-[180px] lg:h-[240px]"
                />

              </div>
              <div className="mt-6">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/DYl2STTuX-Q"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}