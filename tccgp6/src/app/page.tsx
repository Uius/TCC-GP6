import React from 'react'

export default function HomePage() {
  return (
    <div className="flex h-screen text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-yellow-600 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            <h1 className="text-xl font-bold leading-5">TRUST <br /> MANAGER</h1>
          </div>

          <nav className="space-y-4 text-black font-semibold">
            <a href="#" className="block">Cadastro de Clientes</a>
            <a href="#" className="block">Relatórios</a>
            <a href="#" className="block">Orçamentos</a>
            <a href="#" className="block">Notificações</a>
          </nav>
        </div>

        <div className="text-black flex items-center gap-2">
          <span className="text-sm">Ferramentas</span>
          <span className="text-xl">⚙️</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="bodyBG flex-1 bg-neutral-900 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
  <div className="flex items-center gap-3">
    <div className="bg-white rounded-full w-8 h-8" />
    <span className="uppercase text-sm tracking-wide">USERNAME</span>
  </div>

  <div className="flex items-center gap-6">
    <nav className="flex gap-6 text-sm">
      <a href="#" className="w-18 h-8 flex items-center justify-center text-center bg-gray-800 rounded-sm underline">
        HOME
      </a>
      <a href="#" className="h-8 flex items-center justify-center">
        ESTOQUE
      </a>
      <a href="#" className="h-8 flex items-center justify-center">
        SUPORTE
      </a>
    </nav>
    <div className="text-right text-xs leading-4">
      <div>18:30</div>
      <div>17/03/2025</div>
    </div>
  </div>
</header>


        {/* Welcome Section */}
        <section className="bg-yellow-600 rounded p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left text-black">
              <h2 className="text-3xl font-bold">VAMOS LÁ!</h2>
              <p className="mt-2 max-w-sm">
                Dê aos seus sonhos tudo o que você tem e você se surpreenderá com a energia que surge de dentro de você...
              </p>
            </div>
            <img src="/cerveja.png" alt="Logo Empresa" className="h-36 object-contain" />
          </div>
        </section>

        {/* Tutorial Section */}
        <section className="bg-white rounded p-4 text-black">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Trust Manager Logo" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">COMO UTILIZAR NOSSO SITE?</h3>
                <p className="text-sm">Tutorial simplificado...</p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
