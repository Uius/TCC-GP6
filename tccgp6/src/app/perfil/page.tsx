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
          <a href="/" className="text-white bg-gray-800 py-2 px-4 underline rounded-sm">HOME</a>
          <a href="/estoque" className="text-white py-2 px-4">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <a href="/perfil" className="uppercase text-base tracking-wide">USUARIO</a>
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
            <span className="text-sm font-medium">Ferramentas</span>
          </div>
        </aside>

        {/* Divider vertical branco entre sidebar e main */}
        <div
          aria-hidden="true"
          className="w-[6px] bg-white h-[calc(100vh-5rem)] fixed top-20 left-72 z-40"
        />

        {/* CONTEÚDO PRINCIPAL */}
        <main className="py-20 flex-1 bg-cover md:bg-yellow-600 flex justify-center items-start p-4 md:p-10 min-h-0 md:ml-72">
  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl p-10 text-black">
    {/* Cabeçalho */}
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-4xl font-bold tracking-wide">PERFIL</h1>
      <img src="/ICONEPERFIL.png" alt="Perfil" className="w-20 h-20" />
    </div>

    {/* Seção PERFIL */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
        DADOS PESSOAIS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Nome Completo</label>
          <input
            type="text"
            placeholder="Digite o nome completo"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">CPF</label>
          <input
            type="text"
            placeholder="000.000.000-00"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Data de Nascimento</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Sexo</label>
          <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>Selecione</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </select>
        </div>
      </div>
    </section>

    {/* Seção ENDEREÇO */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
        ENDEREÇO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">CEP</label>
          <input
            type="text"
            placeholder="00000-000"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Cidade</label>
          <input
            type="text"
            placeholder="Digite a cidade"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Bairro</label>
          <input
            type="text"
            placeholder="Digite o bairro"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Rua</label>
          <input
            type="text"
            placeholder="Digite a rua"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
    </section>

    {/* Seção CONTATO */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
        CONTATO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">E-mail</label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Telefone</label>
          <input
            type="text"
            placeholder="(00) 00000-0000"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
    </section>

    {/* Botões */}
    <div className="flex justify-end gap-6 mt-8">
      <button className="bg-red-700 text-white font-bold px-6 py-3 rounded-md hover:bg-red-800 transition">
        CANCELAR
      </button>
      <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition">
        SALVAR
      </button>
    </div>
  </div>
</main>

       
      </div>
    </div>
  )
}