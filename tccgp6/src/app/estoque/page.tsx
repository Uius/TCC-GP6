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
            <a href="/" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
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
  <div className="bg-white p-8 rounded-lg shadow-2xl">

    {/* Título */}
    <h1 className="text-4xl font-bold text-black mb-8">GERENCIAMENTO DE ESTOQUE</h1>

    {/* Adicionar novo produto */}
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-black mb-3">ADICIONAR NOVO PRODUTO</h2>
      <div className="w-52 h-52 border-2 border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-green-500 shadow-lg">
        <span className="text-green-500 text-5xl font-bold">+</span>
      </div>
    </div>

    {/* Bebidas */}
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <img src="/ICONEBEBIDA.png" alt="" className="w-7 h-7" />
        <h2 className="text-2xl font-semibold text-black uppercase">Bebidas</h2>
      </div>

      {[{ nome: "Cerveja Heineken Long Neck 473ml", estoque: 20, img: "/heineken.png" }, { nome: "Cerveja Skol Lata 300ml", estoque: 15, img: "/skol.png" }, { nome: "Refrigerante Coca-Cola 600ml", estoque: 10, img: "/coca.png" }].map((p, i) => (
        <div key={i} className="flex items-center justify-between bg-white border rounded-lg shadow-xl p-4 mb-4">
          <div className="flex items-center gap-4">
            <img src={p.img} alt={p.nome} className="w-16 h-16" />
            <div>
              <p className="text-black font-medium text-lg">{p.nome}</p>
              <p className="text-green-600 text-base font-semibold">Em Estoque: <span className="text-black font-normal">{p.estoque} unidades</span></p>
            </div>
          </div>
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-black font-semibold text-lg">
              <span className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">+</span>
              <span className="underline">Adicionar</span>
            </button>
            <button className="flex items-center gap-2 text-black font-semibold text-lg">
              <span className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">-</span>
              Remover
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Salgadinhos */}
    <div>
      <div className="flex items-center gap-3 mb-6">
        <img src="/ICONESALGADO.png" alt="" className="w-7 h-7" />
        <h2 className="text-2xl font-semibold text-black uppercase">Salgadinhos</h2>
      </div>

      {[{ nome: "Batata Prinkles 104g", estoque: 13, img: "/pringles.png" }, { nome: "Salgadinho Fandangos Presunto 60g", estoque: 15, img: "/fandangos.png" }].map((p, i) => (
        <div key={i} className="flex items-center justify-between bg-white border rounded-lg shadow-xl p-4 mb-4">
          <div className="flex items-center gap-4">
            <img src={p.img} alt={p.nome} className="w-16 h-16" />
            <div>
              <p className="text-black font-medium text-lg">{p.nome}</p>
              <p className="text-green-600 text-base font-semibold">Em Estoque: <span className="text-black font-normal">{p.estoque} unidades</span></p>
            </div>
          </div>
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-black font-semibold text-lg">
              <span className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">+</span>
              <span className="underline">Adicionar</span>
            </button>
            <button className="flex items-center gap-2 text-black font-semibold text-lg">
              <span className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">-</span>
              Remover
            </button>
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
