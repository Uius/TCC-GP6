'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

<<<<<<< HEAD
export default function OrcamentosPage() {
  const { time, date } = useClock()

  return (
    <div className="min-h-screen flex flex-col text-white bg-neutral-900">
=======
export default function HomePage() {
  const { time, date } = useClock()
  const [openAccordion, setOpenAccordion] = useState<'usuario' | 'funcionario' | null>('usuario')

  type User = {
    id: number
    name: string
    age: number
    email: string
    phone: string
    avatar?: string | null
  }

  const users: User[] = [
    {
      id: 1064,
      name: 'Mariana Cassiano',
      age: 17,
      email: 'marianacassiano16@gmail.com',
      phone: '(18) 9999-9999',
      avatar: '/ICONEPERFIL.png' // imagem de exemplo; troque conforme disponível
    },
    {
      id: 1065,
      name: 'Mariana Cassiano',
      age: 17,
      email: 'marianacassiano16@gmail.com',
      phone: '(18) 9999-9999',
      avatar: null
    },
    {
      id: 1066,
      name: 'Mariana Cassiano',
      age: 17,
      email: 'marianacassiano16@gmail.com',
      phone: '(18) 9999-9999',
      avatar: null
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
>>>>>>> acfb684a3b13269c00207ff238dd94594eb734f9
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

<<<<<<< HEAD
        {/* BOTÃO HAMBURGER MOBILE */}

        {/* USER + Menu + Data/Hora */}
=======
        {/* Usuário e hora */}
>>>>>>> acfb684a3b13269c00207ff238dd94594eb734f9
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <span className="uppercase text-base tracking-wide">USERNAME</span>
          </div>

<<<<<<< HEAD
          <nav className="hidden sm:flex gap-6 text-sm lg:gap-8 lg:text-base">
            <a href="/teste" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
            <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
            <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
          </nav>

          <div className="text-right text-xs leading-4 lg:text-sm">
            <div className="flex items-center">
              <img src="/ICONETEMPO.png" alt="Time" className="w-4 h-4 mr-2 lg:w-5 lg:h-5" />
              <div>{time}</div>
=======
          <div className="text-right text-sm leading-4">
            <div className="flex items-center justify-end">
              <img src="/ICONETEMPO.png" alt="Time" className="w-5 h-5 mr-2" />
              <span>{time}</span>
>>>>>>> acfb684a3b13269c00207ff238dd94594eb734f9
            </div>
            <span>{date}</span>
          </div>
        </div>
      </header>

<<<<<<< HEAD
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
=======
      {/* CONTEÚDO GERAL */}
      <div className="flex flex-row w-full pt-20">
        {/* SIDEBAR */}
        <aside className="w-72 bg-yellow-600 flex flex-col justify-between p-4 text-black h-[calc(100vh-5rem)] fixed top-20 left-0">
          {/* Menu lateral */}
          <nav className="space-y-5 font-semibold mt-6">
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

          {/* Rodapé da sidebar */}
          <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <span className="text-sm font-medium">Ferramentas</span>
          </div>
        </aside>

        {/* Divider vertical branco entre sidebar e main */}
        <div
          aria-hidden="true"
          className="w-[6px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
        />

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 ml-[calc(72px+6px)] p-8 pt-10 bg-yellow-600 min-h-[calc(100vh-5rem)]">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Accordion: Cadastrar novo usuario */}
            <div className="bg-white rounded-2xl p-6 relative">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'usuario' ? null : 'usuario')}
                className="w-full flex items-center justify-between gap-4"
                aria-expanded={openAccordion === 'usuario'}
              >
                <div className="text-2xl font-extrabold tracking-wider text-black uppercase">
                  Cadastrar
                </div>
                <div className={`transform transition-transform ${openAccordion === 'usuario' ? 'rotate-180' : 'rotate-0'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              {openAccordion === 'usuario' && (
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-left flex items-center justify-between hover:shadow-sm"
                  >
                    
                    <div>
                      <p className="text-sm text-gray-500">Clique para iniciar o cadastro de um Funcionário</p>
                    </div>
                    {/* ícone discreto à direita (opcional) */}
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <br></br>
                  <button
                    type="button"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-left flex items-center justify-between hover:shadow-sm"
                  >
                    
                    <div>
                      <p className="text-sm text-gray-500">Clique para iniciar o cadastro de um Usuário</p>
                    </div>
                    {/* ícone discreto à direita (opcional) */}
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

            </div>

            {/* Lista de cards de usuários */}
            <div className="space-y-6">
              {users.map((u) => (
                <div key={u.id} className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    {u.avatar ? (
                      <img src={u.avatar} alt={u.name} className="w-20 h-20 rounded-full object-cover border" />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                        {/* ícone de câmera simplificado */}
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 7h3l2-3h6l2 3h3v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="13" r="3" stroke="#9CA3AF" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-black font-semibold"> {u.name} ({u.id})</h3>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">Ver mais...</button>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <div>Idade: {u.age}</div>
                      <div>Email: {u.email}</div>
                      <div>Telefone: {u.phone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
>>>>>>> acfb684a3b13269c00207ff238dd94594eb734f9
          </div>
        </main>

      </div>
    </div>
  )
}