'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useClock } from '@/hooks/useClock'

type Produto = {
  id: string
  nome: string
  estoque: number
  estoqueMinimo: number
  validade?: string  // novo campo
  img?: string
  categoria: string
  subcategoria?: string | null
}

type Categoria = {
  nome: string
  subcats: string[]
}

export default function HomePage() {
  const { time, date } = useClock()

  // estado de categorias (com subcategorias) e produtos (inicia vazio)
  const [categorias, setCategorias] = useState<Categoria[]>([
    { nome: 'Bebidas', subcats: [] },
    { nome: 'Salgadinhos', subcats: [] },
  ])
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [showForm, setShowForm] = useState(false)

  // form agora usado para adicionar e editar; novaSub para criar subcategoria
  const [form, setForm] = useState({ 
    nome: '', 
    estoque: 1, 
    estoqueMinimo: 5,
    validade: '', // novo campo
    img: '', 
    categoria: 'Bebidas', 
    novaSub: '' 
  })

  // id do produto em edição (null = modo adicionar)
  const [editingId, setEditingId] = useState<string | null>(null)

  // controle de visibilidade do formulário de criação de subcategoria por categoria
  const [subFormOpen, setSubFormOpen] = useState<Record<string, boolean>>({})

  // ref para input file (arrastar/soltar)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Melhorar carregamento inicial do localStorage
  useEffect(() => {
    try {
      const loadFromStorage = () => {
        const catsRaw = localStorage.getItem('estoque_categorias')
        const prodsRaw = localStorage.getItem('estoque_produtos')
        
        if (catsRaw) {
          const parsedCats = JSON.parse(catsRaw)
          if (Array.isArray(parsedCats) && parsedCats.length > 0) {
            setCategorias(parsedCats)
          }
        }
        
        if (prodsRaw) {
          const parsedProds = JSON.parse(prodsRaw)
          if (Array.isArray(parsedProds)) {
            setProdutos(parsedProds)
          }
        }
      }

      loadFromStorage()

      // Adicionar listener para sincronizar entre abas
      window.addEventListener('storage', loadFromStorage)
      return () => window.removeEventListener('storage', loadFromStorage)
    } catch (e) {
      console.error('Erro ao carregar dados do localStorage:', e)
    }
  }, [])

  // Melhorar persistência no localStorage
  useEffect(() => {
    try {
      if (categorias.length > 0) {
        localStorage.setItem('estoque_categorias', JSON.stringify(categorias))
      }
    } catch (e) {
      console.error('Erro ao salvar categorias:', e)
    }
  }, [categorias])

  useEffect(() => {
    try {
      localStorage.setItem('estoque_produtos', JSON.stringify(produtos))
    } catch (e) {
      console.error('Erro ao salvar produtos:', e)
    }
  }, [produtos])

  // Função auxiliar para debug/verificação dos dados salvos
  function checkStorageData() {
    console.log('Categorias salvas:', localStorage.getItem('estoque_categorias'))
    console.log('Produtos salvos:', localStorage.getItem('estoque_produtos'))
  }

  function resetForm() {
    setForm({ 
      nome: '', 
      estoque: 1, 
      estoqueMinimo: 5, 
      validade: '',
      img: '', 
      categoria: categorias[0]?.nome || 'Bebidas', 
      novaSub: '' 
    })
    setEditingId(null)
  }

  function criarSubcategoria(categoriaNome: string, subNome: string) {
    if (!subNome?.trim()) return
    setCategorias(prev => prev.map(c => c.nome === categoriaNome ? { ...c, subcats: Array.from(new Set([subNome.trim(), ...c.subcats])) } : c))
    setSubFormOpen(prev => ({ ...prev, [categoriaNome]: false }))
  }

  // lê arquivo e coloca dataURL em form.img
  function handleFiles(files?: FileList | null) {
    if (!files || files.length === 0) return
    const file = files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setForm(f => ({ ...f, img: String(reader.result) }))
    }
    reader.readAsDataURL(file)
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault()
    e.stopPropagation()
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    e.stopPropagation()
    handleFiles(e.dataTransfer.files)
  }

  // conta produtos com estoque baixo
  const produtosEstoqueBaixo = produtos.filter(p => p.estoque <= p.estoqueMinimo).length

  function handleAddProduto(e?: React.FormEvent) {
    e?.preventDefault()
    if (!form.nome.trim()) return

    try {
      const sub = form.novaSub?.trim() || null
      if (sub) {
        setCategorias(prev => prev.map(c => 
          c.nome === form.categoria 
            ? { ...c, subcats: Array.from(new Set([sub, ...c.subcats])) } 
            : c
        ))
      }

      if (editingId) {
        // atualizar produto existente
        setProdutos(prev => prev.map(p => p.id === editingId ? {
          ...p,
          nome: form.nome.trim(),
          estoque: Math.max(0, Number(form.estoque) || 0),
          estoqueMinimo: Math.max(0, Number(form.estoqueMinimo) || 5),
          validade: form.validade || undefined,
          img: form.img?.trim() || '/placeholder.png',
          categoria: form.categoria,
          subcategoria: sub || p.subcategoria || null,
        } : p))
      } else {
        // criar novo produto
        const novo: Produto = {
          id: Date.now().toString(),
          nome: form.nome.trim(),
          estoque: Math.max(0, Number(form.estoque) || 0),
          estoqueMinimo: Math.max(0, Number(form.estoqueMinimo) || 5),
          validade: form.validade || undefined,
          img: form.img?.trim() || '/placeholder.png',
          categoria: form.categoria,
          subcategoria: sub || null,
        }
        setProdutos(prev => [novo, ...prev])
      }

      resetForm()
      setShowForm(false)

      // Verificar se salvou corretamente
      setTimeout(checkStorageData, 100)
    } catch (e) {
      console.error('Erro ao adicionar/editar produto:', e)
      alert('Erro ao salvar produto. Por favor, tente novamente.')
    }
  }

  // Função para verificar se produto está próximo do vencimento (30 dias)
  function isProximoVencimento(validade?: string) {
    if (!validade) return false
    const hoje = new Date()
    const dataValidade = new Date(validade)
    const dias = Math.ceil((dataValidade.getTime() - hoje.getTime()) / (1000 * 3600 * 24))
    return dias <= 30 && dias > 0
  }

  // Função para verificar se produto está vencido
  function isVencido(validade?: string) {
    if (!validade) return false
    return new Date(validade) < new Date()
  }

  function increment(id: string) {
    setProdutos(prev => prev.map(p => p.id === id ? { ...p, estoque: p.estoque + 1 } : p))
  }

  function decrement(id: string) {
    setProdutos(prev => prev.map(p => p.id === id ? { ...p, estoque: Math.max(0, p.estoque - 1) } : p))
  }

  function handleEdit(id: string) {
    const p = produtos.find(x => x.id === id)
    if (!p) return
    setForm({ 
      nome: p.nome, 
      estoque: p.estoque, 
      estoqueMinimo: p.estoqueMinimo,
      validade: p.validade || '',
      img: p.img || '', 
      categoria: p.categoria, 
      novaSub: p.subcategoria || '' 
    })
    setEditingId(id)
    setShowForm(true)
  }

  // Adicionar estados para controle do modal
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Substituir função handleDelete
  function handleDelete(id: string) {
    setDeletingId(id)
    setShowDeleteModal(true)
  }

  function confirmDelete() {
    if (deletingId) {
      setProdutos(prev => prev.filter(p => p.id !== deletingId))
      setShowDeleteModal(false)
      setDeletingId(null)
    }
  }

  // helpers
  function produtosPorCategoria(categoriaNome: string) {
    return produtos.filter(p => p.categoria === categoriaNome)
  }

  return (
    <div className="h-auto">

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
          <a href="/estoque" className="text-white bg-zinc-800 py-2 px-4 underline rounded-sm">ESTOQUE</a>
          <a href="/suporte" className="text-white py-2 px-4">SUPORTE</a>
        </nav>

        {/* Usuário e hora */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/ICONEPERFIL.png" alt="User Profile" className="w-8 h-8" />
            <a href="/perfil" className="uppercase text-base text-white tracking-wide">USUÁRIO</a>
          </div>
          
          <div className="text-right text-white text-sm leading-4">
            <div className="flex items-center justify-end">
              <img src="/ICONETEMPO.png" alt="Time" className="w-5 h-5 mr-2" />
              <span>{time}</span>
            </div>
            <span>{date}</span>
          </div>
        </div>
      </header>

      {/* Conteúdo abaixo do header */}
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-yellow-600 flex flex-col justify-between p-4 sticky top-20 self-start h-[calc(100vh-5rem)] overflow-auto">
          <div>
            <nav className="flex flex-col space-y-6 text-black font-semibold">
              <div className="flex items-center gap-3">
                <img src="/ICONECADCLIENTE.png" alt="" className="w-6 h-6" />
                <a href="#" className="block">Cadastro de Clientes</a>
              </div>

              <div className="flex items-center gap-3">
                <img src="/ICONERELATORIO.png" alt="" className="w-6 h-6" />
                <a href="/relatorio" className="block">Relatórios</a>
              </div>

              <div className="flex items-center gap-3">
                <img src="/ICONEORCAMENTO.png" alt="" className="w-6 h-6" />
                <a href="/orcamentos" className="block">Orçamentos</a>
              </div>

              <div className="relative flex items-center gap-3">
                <img src="/ICONENOTIFIC.png" alt="" className="w-6 h-6" />
                <a href="/notificacoes" className="block">Notificações</a>
                {produtosEstoqueBaixo > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {produtosEstoqueBaixo}
                  </span>
                )}
              </div>
            </nav>
          </div>

           <div className="flex items-center gap-2 mb-2">
            <img src="/ICONECONFIG.png" alt="Ferramentas" className="h-5 w-5" />
            <a href='/ferramentas' className="text-black font-bold text-sm">Ferramentas</a>
          </div>
        </aside>

        {/* Linha de divisão branca (18px) */}
        <div className="w-[18px] bg-white sticky top-20 self-start h-[calc(100vh-5rem)]" aria-hidden="true" />

        {/* Main Content */}
        <main className="flex-1 bg-yellow-600 p-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-2xl text-black">

            {/* Título */}
            <h1 className="text-4xl font-bold text-black mb-8">GERENCIAMENTO DE ESTOQUE</h1>

            {/* Adicionar/Editar novo produto */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-black mb-3">ADICIONAR NOVO PRODUTO</h2>

              {!showForm ? (
                <div
                  className="w-52 h-52 border-2 border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-green-500 shadow-lg"
                  onClick={() => { resetForm(); setShowForm(true) }}
                >
                  <span className="text-green-500 text-5xl font-bold">+</span>
                </div>
              ) : (
                <form onSubmit={handleAddProduto} className="w-80 bg-gray-50 p-4 rounded-md border">
                  <div className="mb-2">
                    <label className="text-sm font-semibold text-black">Nome</label>
                    <input
                      value={form.nome}
                      onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                      className="w-full p-2 border rounded mt-1"
                      placeholder="Ex: Cerveja Long Neck"
                      required
                    />
                  </div>

                  <div className="mb-2 flex gap-2">
                    <div className="flex-1">
                      <label className="text-sm font-semibold text-black">Categoria</label>
                      <select
                        value={form.categoria}
                        onChange={e => setForm(f => ({ ...f, categoria: e.target.value }))}
                        className="w-full p-2 border rounded mt-1"
                      >
                        {categorias.map(c => <option key={c.nome} value={c.nome}>{c.nome}</option>)}
                      </select>
                    </div>
                    <div style={{ width: 120 }}>
                      <label className="text-sm font-semibold text-black">Estoque</label>
                      <input
                        type="number"
                        min={0}
                        value={form.estoque}
                        onChange={e => setForm(f => ({ ...f, estoque: Number(e.target.value) }))}
                        className="w-full p-2 border rounded mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2 flex gap-2">
                    <div style={{ width: 120 }}>
                      <label className="text-sm font-semibold text-black">Estoque Mínimo</label>
                      <input
                        type="number"
                        min={0}
                        value={form.estoqueMinimo}
                        onChange={e => setForm(f => ({ ...f, estoqueMinimo: Number(e.target.value) }))}
                        className="w-full p-2 border rounded mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="text-sm font-semibold text-black">Data de Validade</label>
                    <input
                      type="date"
                      value={form.validade}
                      onChange={e => setForm(f => ({ ...f, validade: e.target.value }))}
                      className="w-full p-2 border rounded mt-1"
                    />
                  </div>

                  {/* Área de arrastar/soltar + fallback para URL */}
                  <div className="mb-3">
                    <label className="text-sm font-semibold text-black block mb-2">Imagem do produto (arraste e solte ou clique)</label>

                    <div
                      onDragOver={onDragOver}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-36 border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer bg-white hover:border-green-500"
                      aria-label="Área para arrastar e soltar imagem"
                    >
                      {form.img ? (
                        <img src={form.img} alt="preview" className="max-h-28 object-contain" />
                      ) : (
                        <div className="text-center">
                          <div className="text-green-500 text-4xl font-bold">⌁</div>
                          <div className="text-sm text-black">Arraste e solte a imagem aqui ou clique para selecionar</div>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={e => handleFiles(e.target.files)}
                      />
                    </div>

                    <div className="mt-2">
                      <label className="text-sm font-semibold text-black">Ou cole/insira uma URL da imagem (opcional)</label>
                      <input
                        value={form.img}
                        onChange={e => setForm(f => ({ ...f, img: e.target.value }))}
                        className="w-full p-2 border rounded mt-1"
                        placeholder="/imagem.png ou https://..."
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="text-sm font-semibold text-black">Nova subcategoria (opcional)</label>
                    <input
                      value={form.novaSub}
                      onChange={e => setForm(f => ({ ...f, novaSub: e.target.value }))}
                      className="w-full p-2 border rounded mt-1"
                      placeholder="Preencha para criar uma subcategoria e associar ao produto"
                    />
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button type="button" onClick={() => { resetForm(); setShowForm(false) }} className="px-4 py-2 border rounded bg-gray-200">Cancelar</button>
                    <button type="submit" className="px-4 py-2 rounded bg-green-500 text-white">{editingId ? 'Salvar' : 'Adicionar'}</button>
                  </div>
                </form>
              )}
            </div>

            {/* Seção de categorias + subcategorias + produtos */}
            {categorias.map((cat) => {
              const itens = produtosPorCategoria(cat.nome)
              return (
                <div key={cat.nome} className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={cat.nome === 'Bebidas' ? '/ICONEBEBIDA.png' : '/ICONESALGADO.png'} alt="" className="w-7 h-7" />
                    <h2 className="text-2xl font-semibold text-black uppercase">{cat.nome}</h2>

                    <div className="ml-4 flex items-center gap-2">
                      <button
                        onClick={() => setSubFormOpen(prev => ({ ...prev, [cat.nome]: !prev[cat.nome] }))}
                        className="px-2 py-1 text-sm bg-gray-200 rounded"
                      >
                        + Subcategoria
                      </button>
                    </div>
                  </div>

                  {subFormOpen[cat.nome] && (
                    <div className="mb-4">
                      <input placeholder="Nome da subcategoria"
                             className="p-2 border rounded mr-2"
                             id={`input-sub-${cat.nome}`}
                             onKeyDown={(e) => {
                               if (e.key === 'Enter') {
                                 const val = (e.target as HTMLInputElement).value
                                 criarSubcategoria(cat.nome, val)
                                 ;(e.target as HTMLInputElement).value = ''
                               }
                             }}
                      />
                      <button onClick={() => {
                        const el = document.getElementById(`input-sub-${cat.nome}`) as HTMLInputElement | null
                        if (!el) return
                        criarSubcategoria(cat.nome, el.value)
                        el.value = ''
                      }} className="px-3 py-1 bg-green-500 text-white rounded">Criar</button>
                    </div>
                  )}

                  {/* listar subcategorias se houver */}
                  {cat.subcats.length === 0 ? null : (
                    cat.subcats.map(sub => {
                      const itensSub = itens.filter(p => p.subcategoria === sub)
                      return (
                        <div key={sub} className="mb-4">
                          <h3 className="font-semibold text-black">{sub}</h3>
                          {itensSub.length === 0 ? (
                            <p className="text-gray-600 mb-2">Nenhum produto nesta subcategoria.</p>
                          ) : (
                            itensSub.map(p => (
                              <div key={p.id} className={`flex items-center justify-between bg-white border rounded-lg shadow-xl p-4 mb-4 ${p.estoque <= p.estoqueMinimo ? 'border-red-500' : ''}`}>
                                <div className="flex items-center gap-4">
                                  <img src={p.img || '/placeholder.png'} alt={p.nome} className="w-16 h-16 object-contain" />
                                  <div>
                                    <p className="text-black font-medium text-lg">{p.nome}</p>
                                    <p className={`${p.estoque <= p.estoqueMinimo ? 'text-red-600' : 'text-orange-600'} text-base font-semibold`}>
                                      Em Estoque: <span className="text-black font-normal">{p.estoque} unidades</span>
                                      {p.estoque <= p.estoqueMinimo && (
                                        <span className="text-red-500 ml-2">(Abaixo do mínimo: {p.estoqueMinimo})</span>
                                      )}
                                    </p>
                                    {p.validade && (
                                      <p className={`text-sm ${
                                        isVencido(p.validade) 
                                          ? 'text-red-800 font-bold' 
                                          : isProximoVencimento(p.validade) 
                                            ? 'text-yellow-600' 
                                            : 'text-gray-600'
                                      }`}>
                                        Validade: {new Date(p.validade).toLocaleDateString('pt-BR')}
                                        {isVencido(p.validade) && <span className="ml-2 text-red-800">VENCIDO</span>}
                                        {isProximoVencimento(p.validade) && <span className="ml-2 text-yellow-600">Próximo ao vencimento</span>}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                  <div className="flex gap-6">
                                    <button onClick={() => increment(p.id)} className="flex items-center gap-2 text-black font-semibold text-lg">
                                      <span className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">+</span>
                                      <span className="underline">Adicionar</span>
                                    </button>
                                    <button onClick={() => decrement(p.id)} className="flex items-center gap-2 text-black font-semibold text-lg">
                                      <span className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">-</span>
                                      Remover
                                    </button>
                                  </div>
                                  <button onClick={() => handleEdit(p.id)} className="px-3 py-1 text-sm bg-yellow-300 rounded border">Editar</button>
                                  <button onClick={() => handleDelete(p.id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded">Excluir</button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      )
                    })
                  )}

                  {/* produtos sem subcategoria nesta categoria */}
                  <div className="mt-2">
                    {itens.filter(p => !p.subcategoria).length === 0 ? (
                      itens.length === 0 ? <p className="text-gray-600">Nenhum produto nessa categoria. Adicione produtos para exibi-los aqui.</p> : null
                    ) : (
                      itens.filter(p => !p.subcategoria).map(p => (
                        <div key={p.id} className={`flex items-center justify-between bg-white border rounded-lg shadow-xl p-4 mb-4 ${p.estoque <= p.estoqueMinimo ? 'border-red-500' : ''}`}>
                          <div className="flex items-center gap-4">
                            <img src={p.img || '/placeholder.png'} alt={p.nome} className="w-16 h-16 object-contain" />
                            <div>
                              <p className="text-black font-medium text-lg">{p.nome}</p>
                              <p className={`${p.estoque <= p.estoqueMinimo ? 'text-red-600' : 'text-green-600'} text-base font-semibold`}>
                                Em Estoque: <span className="text-black font-normal">{p.estoque} unidades</span>
                                {p.estoque <= p.estoqueMinimo && (
                                  <span className="text-red-500 ml-2">(Abaixo do mínimo: {p.estoqueMinimo})</span>
                                )}
                              </p>
                              {p.validade && (
                                <p className={`text-sm ${
                                  isVencido(p.validade) 
                                    ? 'text-red-800 font-bold' 
                                    : isProximoVencimento(p.validade) 
                                      ? 'text-yellow-600' 
                                      : 'text-gray-600'
                                }`}>
                                  Validade: {new Date(p.validade).toLocaleDateString('pt-BR')}
                                  {isVencido(p.validade) && <span className="ml-2 text-red-800">VENCIDO</span>}
                                  {isProximoVencimento(p.validade) && <span className="ml-2 text-yellow-600">Próximo ao vencimento</span>}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-3 items-center">
                            <div className="flex gap-6">
                              <button onClick={() => increment(p.id)} className="flex items-center gap-2 text-black font-semibold text-lg">
                                <span className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">+</span>
                                <span className="underline">Adicionar</span>
                              </button>
                              <button onClick={() => decrement(p.id)} className="flex items-center gap-2 text-black font-semibold text-lg">
                                <span className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">-</span>
                                Remover
                              </button>
                            </div>
                            <button onClick={() => handleEdit(p.id)} className="px-3 py-1 text-sm bg-yellow-500 rounded border">Editar</button>
                            <button onClick={() => handleDelete(p.id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded">Excluir</button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                </div>
              )
            })}

          </div>
        </main>

      </div>

      {/* Modal de confirmação */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirmar exclusão</h3>
            <p className="text-gray-600 mb-6">Tem certeza que deseja excluir este produto? Esta ação não pode ser desfeita.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false)
                  setDeletingId(null)
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
