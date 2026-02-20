import { useState } from "react"
import { Menu } from "lucide-react"

const drinks = [
  { nome: "Mojito", preco: "R$ 18", img: "https://images.unsplash.com/photo-1582571352039-38f70a03d3b9?q=80&w=800" },
  { nome: "Caipirinha", preco: "R$ 15", img: "https://images.unsplash.com/photo-1564758866813-9d3f3c1f63b7?q=80&w=800" },
  { nome: "Gin Tônica", preco: "R$ 20", img: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=800" },
  { nome: "Aperol Spritz", preco: "R$ 22", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800" },
]

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex bg-black text-white min-h-screen">

      {/* MENU LATERAL */}
      <aside className={`bg-neutral-900 p-6 space-y-6 fixed md:static h-full z-50 transition-all duration-300
        ${open ? "left-0" : "-left-64"} md:left-0 w-64`}>
        
        <h1 className="text-2xl font-bold text-yellow-400">
          Madotielo Drink's
        </h1>

        <nav className="flex flex-col gap-4 text-lg">
          <a href="#">Home</a>
          <a href="#">Bebidas</a>
          <a href="#">Garçons</a>
          <a href="#">Reservas</a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <div className="flex-1 md:ml-64">

        {/* TOPO MOBILE */}
        <div className="md:hidden flex items-center p-4 border-b border-neutral-800">
          <Menu onClick={() => setOpen(!open)} className="cursor-pointer" />
          <span className="ml-4 font-bold">Madotielo Drink's</span>
        </div>

        {/* TÍTULO */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">Drinks Disponíveis</h2>

          {/* CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {drinks.map((drink, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={drink.img}
                  alt={drink.nome}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-semibold">{drink.nome}</h3>
                  <p className="text-yellow-400 font-bold">{drink.preco}</p>

                  <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:opacity-90">
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
