'use client'

import React, { useState } from 'react'
import { useClock } from '@/hooks/useClock'

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
          <a href="/" className="text-white py-2 px-4">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <span className="uppercase text-base font-bold tracking-wide">USUÁRIO</span>
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
              <a href="/cadastrocliente" className="block underline">Cadastro de Clientes</a>
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
            <a href='/ferramentas' className="text-sm font-medium">Ferramentas</a>
          </div>
        </aside>

        {/* Divider vertical branco entre sidebar e main */}
        <div
          aria-hidden="true"
          className="w-[18px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
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
          </div>
        </main>

      </div>
    </div>
  )
}