import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import HeroStore from "./components/HeroStore"
import Categorias from "./components/Categorias"

import Novidades from "./pages/Novidades"
import Bebidas from "./pages/Bebidas"
import Eventos from "./pages/Eventos"
import Personalizacao from "./pages/Personalizacao"
import Outlet from "./pages/Outlet"
import DrinkDetalhe from "./pages/DrinkDetalhe"

import Footer from "./components/Footer"

const drinks = [
  { id: "mojito", nome: "Mojito", preco: "R$ 18", img: "https://images.unsplash.com/photo-1582571352039-38f70a03d3b9?q=80&w=800" },
  { id: "caipirinha", nome: "Caipirinha", preco: "R$ 15", img: "https://images.unsplash.com/photo-1564758866813-9d3f3c1f63b7?q=80&w=800" },
  { id: "gin", nome: "Gin Tônica", preco: "R$ 20", img: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=800" },
  { id: "aperol", nome: "Aperol Spritz", preco: "R$ 22", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800" },
]

// aplica tema salvo
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark")
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen transition-colors duration-300
                      bg-neutral-100 text-neutral-900
                      dark:bg-neutral-950 dark:text-neutral-100">

        {/* HEADER */}
        <Header />

        <Routes>

          {/* HOME */}
          <Route path="/" element={
            <>
              <HeroStore />
              <Categorias />

              {/* DRINKS */}
              <section className="max-w-7xl mx-auto px-6 py-12">

                <div className="mb-10">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                      Drinks Disponíveis
                    </h2>
                    <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-700"></div>
                  </div>

                  <p className="text-neutral-500 dark:text-neutral-400 mt-2">
                    Escolha seu drink favorito
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {drinks.map((drink) => (

                    <Link
                      key={drink.id}
                      to={`/drink/${drink.id}`}
                      className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition block"
                    >

                      <img
                        src={drink.img}
                        alt={drink.nome}
                        className="h-48 w-full object-cover"
                      />

                      <div className="p-5">

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {drink.nome}
                        </h3>

                        <p className="text-yellow-500 font-bold">
                          {drink.preco}
                        </p>

                        <button className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600">
                          Ver detalhes
                        </button>

                      </div>

                    </Link>

                  ))}

                </div>

              </section>
            </>
          } />

          {/* OUTRAS PÁGINAS */}
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/personalizacao" element={<Personalizacao />} />
          <Route path="/outlet" element={<Outlet />} />

          {/* DETALHE DO DRINK */}
          <Route path="/drink/:id" element={<DrinkDetalhe />} />

        </Routes>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  )
}