'use client'

import React from 'react'
import { useClock } from '@/hooks/useClock'

export default function HomePage() {
 
  const { time, date } = useClock()
  
  return (
    <div className="flex h-auto text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-yellow-600 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center mb-6">
            <img src="/LOGOBRANCA.png" alt="Logo" className="" />
            
          </div>

          <nav className="space-y-4 text-black font-semibold">
            <div className='flex flex-row'>
              <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6 mr-2"/>
              <a href="#" className="block">Cadastro de Clientes</a>
            </div>
            <div className='flex flex-row'>
              <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6 mr-2"/> 
              <a href="#" className="block">Relatórios</a>
            </div>
            <div className='flex flex-row'>
              <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6 mr-2"/>
              <a href="#" className="block">Orçamentos</a>
            </div>
            <div className='flex flex-row'>
              <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6 mr-2"/>
              <a href="#" className="block">Notificações</a>
            </div>          
          </nav>
        </div>

        <div className="text-black flex items-center gap-2">
          <span className="text-sm">Ferramentas</span>
          <img src="/ICONECONFIG.png" alt="Icone da opção ferramentas" className="h-6 w-6" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="bodyBG flex-1 bg-neutral-900 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
  <div className="flex items-center gap-3">
    <img src="/ICONEPERFIL.png" alt="" className=' w-8 h-8' />
    <span className="uppercase text-sm tracking-wide">USERNAME</span>
  </div>

  <div className="flex items-center gap-6">
    <nav className="flex gap-6 text-sm">
      <a href="#" className="w-18 h-8 flex items-center justify-center text-center bg-gray-800 rounded-sm underline">
        HOME
      </a>
      <a href="/estoque" className="h-8 flex items-center justify-center">
        ESTOQUE
      </a>
      <a href="/suporte" className="h-8 flex items-center justify-center">
        SUPORTE
      </a>
    </nav>
    <div className="text-right text-xs leading-4">
      <div className='flex flex-row'>
        <img src="/ICONETEMPO.png" alt="" className='w-3.5 h-3.5 mr-2'/>
        <div>{time}</div>
      </div>
      <div>{date}</div>
    </div>
  </div>
</header>


        {/* Welcome Section */}
        <section className="p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src="/HOMEVAMOSLA.png" alt="Logo Empresa" className="h-36 object-contain" />
          </div>
        </section>

        {/* Tutorial Section */}
        <section className=" p-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <img src="/TUTORIAL.png" alt="Tutorial venha nos conhecer" />
          </div>
          <iframe className="aspect-video items-center" src="https://youtu.be/Q0zdxsqWAdA?si=Hh0K5dgdnXQB-uIt"></iframe>
        </section>
      </main>
    </div>
  )
}
