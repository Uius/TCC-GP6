'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function OrcamentosPage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen flex flex-col text-white bg-neutral-900">
      {/* HEADER */}
<<<<<<< HEAD
      <header className="bg-neutral-900 fixed top-0 left-0 w-full z-50 flex items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo: tamanho responsivo, maior em lg/xl */}
=======
      <header className="bg-neutral-900 fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 px-8">
        {/* Logo */}
>>>>>>> acfb684a3b13269c00207ff238dd94594eb734f9
        <div className="flex items-center">
          <img
            src="/LOGOBRANCA.png"
            alt="Logo"
<<<<<<< HEAD
            className="h-10 sm:h-20 w-28 sm:w-40 object-contain lg:h-24 lg:w-48 xl:h-28 xl:w-56"
          />
        </div>

        {/* espaço entre logo e resto */}
        <div className="flex-1" />

        {/* BOTÃO HAMBURGER MOBILE */}

        {/* USER + Menu + Data/Hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8 lg:w-9 lg:h-9" />
            <span className="uppercase text-sm tracking-wide lg:text-base">USERNAME</span>
          </div>

          <nav className="hidden sm:flex gap-6 text-sm lg:gap-8 lg:text-base">
            <a href="/teste" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
            <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
            <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
          </nav>

          <div className="text-right text-xs leading-4 lg:text-sm">
            <div className="flex items-center">
              <img src="/ICONETEMPO.png" alt="Time" className="w-4 h-4 mr-2 lg:w-5 lg:h-5" />
              <div>{time}</div>
            </div>
            <div>{date}</div>
=======
            className="h-20 w-40 object-contain"
          />
        </div>

        {/* Menu principal */}
        <nav className="flex gap-8 text-base font-semibold">
          <a href="#" className="text-white py-2 px-4 rounded-sm">HOME</a>
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
>>>>>>> acfb684a3b13269c00207ff238dd94594eb734f9
          </div>
        </div>
      </header>


      {/* CONTEÚDO - sidebar + main */}
      <div className="flex flex-1 pt-20 min-h-0">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:flex md:flex-col md:w-72 lg:w-80 bg-yellow-600 text-black p-6 md:sticky md:top-20 md:h-[calc(100vh-80px)]">
          <div className="flex-1">
            <nav className="space-y-6 font-semibold">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
                </div>
                <a href="#">Cadastro de Clientes</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6" />
                </div>
                <a href="/relatorio">Relatórios</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6" />
                </div>
                <a href="/orcamentos">Orçamentos</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6" />
                </div>
                <a href="/notificacoes">Notificações</a>
              </div>
            </nav>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="w-6 h-6" />
            <span className="text-sm">Ferramentas</span>
          </div>
        </aside>

        {/* divisor fino */}
        <div className="hidden md:block md:w-px bg-white/20" />

        {/* Main */}
        <main className="flex-1 bg-yellow-600 overflow-auto min-h-0 p-8 lg:p-12">
          <div className="max-w-4xl mx-auto bg-white text-black rounded shadow-lg p-10">
            <h1 className="text-3xl font-extrabold mb-2">ORÇAMENTO</h1>
            <p className="text-sm text-gray-600 mb-6">Informações Gerais</p>

            <p className="text-yellow-600 font-semibold mb-6">Solicite um orçamento</p>

            <form className="grid grid-cols-12 gap-6">
              {/* Left column (form fields) */}
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div>
                  <label className="block text-sm mb-2">Nome</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Telefone</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Endereço</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Quantidade</label>
                    <input className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Valor</label>
                    <input className="w-full border rounded px-3 py-2 text-sm" />
                  </div>
                </div>
              </div>

              {/* Right column (upload + descrição) */}
              <div className="col-span-12 lg:col-span-5 space-y-4">
                <div>
                  <label className="block text-sm mb-2">Descrição</label>
                  <input className="w-full border rounded px-3 py-2 text-sm" placeholder="Descrição" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Upload de arquivos</label>
                  <div className="w-full h-36 border-2 border-dashed rounded bg-gray-50 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <svg className="mx-auto mb-2 w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16v-4a4 4 0 118 0v4m-5-4v4m0 0h6" />
                      </svg>
                      <div className="text-sm">Upload de arquivos</div>
                      <div className="text-xs text-gray-500">Fotos, documentos, arquivos etc.</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button type="button" className="bg-red-600 text-white px-6 py-2 rounded">Cancelar</button>
                  <button type="submit" className="bg-yellow-600 text-black px-6 py-2 rounded">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}