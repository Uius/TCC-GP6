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
          <a href="/" className="text-white py-2 px-">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <a href="/perfil" className="underline uppercase text-base tracking-wide">USUARIO</a>
          </div>

          <div className="text-right text-sm leading-4">
            <div className="flex items-center justify-end">
              <img src="/ICONETEMPO.png" alt="Time" className="w-5 h-5 mr-3" />
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
            <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <a href='/ferramentas' className="font-bold text-sm">Ferramentas</a>
          </div>
        </aside>

        {/* Divider vertical branco entre sidebar e main */}
        <div
          aria-hidden="true"
          className="w-[6px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
        />

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 bg-yellow-600 flex justify-center items-start p-6 md:p-10 min-h-[calc(100vh-5rem)] md:ml-72">
  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl p-10 text-black">
    {/* Cabeçalho */}
    <div className="flex justify-between items-center border-b-2 border-gray-300 pb-6 mb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-yellow-600 tracking-wide mb-1">PERFIL</h1>
        <h2 className="text-xl font-bold">ADEGA SANTU MEE</h2>
        <div className="mt-2 text-sm text-gray-600">
          <p className="font-semibold">Informações Gerais</p>
          <p>data de cad. 24/03/2025</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* Espaço para logo */}
        <div className="w-40 h-40 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
          <img
            src="/santume.png"
            alt="Logo da empresa"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>

    {/* Seção PERFIL */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-yellow-600 mb-4">PERFIL</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Nome</label>
          <input type="text" placeholder="Nome" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Sobrenome</label>
          <input type="text" placeholder="Sobrenome" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">CNPJ</label>
          <input type="text" placeholder="CNPJ" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Código</label>
          <input type="text" placeholder="Código" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
      </div>
    </section>

    {/* Seção ENDEREÇO */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-yellow-600 mb-4">ENDEREÇO</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">Rua</label>
          <input type="text" placeholder="Nome Da Rua" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">N°</label>
          <input type="text" placeholder="N°" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Bairro</label>
          <input type="text" placeholder="Bairro" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
      </div>
    </section>

    {/* Seção CONTATO */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-yellow-600 mb-4">CONTATO</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-1">E-mail</label>
          <input type="email" placeholder="E-mail" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Telefone</label>
          <input type="text" placeholder="Telefone" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Telefone Fixo</label>
          <input type="text" placeholder="Telefone Fixo" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Observações</label>
          <input type="text" placeholder="Observações" className="w-full border border-gray-300 rounded-md p-3" />
        </div>
      </div>
    </section>

    {/* Botões */}
    <div className="flex justify-between mt-10">
      <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition">
        Cancelar
      </button>
      <button className="bg-yellow-500 text-white font-bold px-8 py-3 rounded-md hover:bg-yellow-600 transition">
        Salvar
      </button>
    </div>
  </div>
</main>


       
      </div>
    </div>
)
}