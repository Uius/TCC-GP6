'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function OrcamentosPage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen flex flex-col text-white bg-neutral-900">
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
          <a href="#" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* BOTÃO HAMBURGER MOBILE */}

        {/* USER + Menu + Data/Hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <span className="uppercase text-base tracking-wide">USERNAME</span>
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
            <span>{date}</span>
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
        <main className="flex-1 bg-yellow-600 p-6 md:p-8 overflow-auto min-h-0">
          <div className="w-full max-w-5xl mx-auto">
            <section className="bg-white rounded-lg shadow-2xl p-8 w-full">
              <h2 className="text-2xl font-bold text-center mb-6">
                NOTIFICAÇÕES:
              </h2>

              <div className="space-y-4">
                {/* 3x Var. Validade */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ICONEVALIDADE.png"
                      alt="Validade"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="font-bold text-stone-950">
                        ALERTA DE VALIDADE
                      </p>
                      <p className="text-sm text-stone-800">
                        O produto 'Leite UHT' vence em 3 dias.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 md:mt-0">
                    <img
                      src="/ICONEOLHO.png"
                      alt="Detalhes"
                      className="w-8 h-6 cursor-pointer"
                    />
                    <img
                      src="/ICONEX.png"
                      alt="Excluir"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ICONEVALIDADE.png"
                      alt="Validade"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="font-bold text-stone-950">
                        ALERTA DE VALIDADE
                      </p>
                      <p className="text-sm text-stone-800">
                        O produto 'Iogurte' vence em 2 dias.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 md:mt-0">
                    <img
                      src="/ICONEOLHO.png"
                      alt="Detalhes"
                      className="w-8 h-6 cursor-pointer"
                    />
                    <img
                      src="/ICONEX.png"
                      alt="Excluir"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ICONEVALIDADE.png"
                      alt="Validade"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="font-bold text-stone-950">
                        ALERTA DE VALIDADE
                      </p>
                      <p className="text-sm text-stone-800">
                        O produto 'Queijo' vence em 1 dia.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 md:mt-0">
                    <img
                      src="/ICONEOLHO.png"
                      alt="Detalhes"
                      className="w-8 h-6 cursor-pointer"
                    />
                    <img
                      src="/ICONEX.png"
                      alt="Excluir"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                </div>

                {/* 3x Var. Alerta de Estoque */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ICONEALERTA.png"
                      alt="Alerta"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="font-bold text-stone-950">
                        ALERTA NO ESTOQUE
                      </p>
                      <p className="text-sm text-stone-800">
                        O produto 'Papel Toalha' está com 2 unidades.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 md:mt-0">
                    <img
                      src="/ICONEOLHO.png"
                      alt="Detalhes"
                      className="w-8 h-6 cursor-pointer"
                    />
                    <img
                      src="/ICONEX.png"
                      alt="Excluir"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ICONEALERTA.png"
                      alt="Alerta"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="font-bold text-stone-950">
                        ALERTA NO ESTOQUE
                      </p>
                      <p className="text-sm text-stone-800">
                        O produto 'Sabonete' está com 1 unidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 md:mt-0">
                    <img
                      src="/ICONEOLHO.png"
                      alt="Detalhes"
                      className="w-8 h-6 cursor-pointer"
                    />
                    <img
                      src="/ICONEX.png"
                      alt="Excluir"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ICONEALERTA.png"
                      alt="Alerta"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="font-bold text-stone-950">
                        ALERTA NO ESTOQUE
                      </p>
                      <p className="text-sm text-stone-800">
                        O produto 'Álcool Gel' está com 0 unidades.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 md:mt-0">
                    <img
                      src="/ICONEOLHO.png"
                      alt="Detalhes"
                      className="w-8 h-6 cursor-pointer"
                    />
                    <img
                      src="/ICONEX.png"
                      alt="Excluir"
                      className="w-6 h-6 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

      </div>
    </div>
  )
}