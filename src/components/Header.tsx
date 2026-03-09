import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Moon,
  Sun
} from "lucide-react"
import DarkModeToggle from "./DarkModeToggle";

<DarkModeToggle />

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [shrink, setShrink] = useState(false)

  const cartCount = 2

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative pb-1 transition ${
      isActive
        ? "text-black font-semibold after:w-full"
        : "text-neutral-500 hover:text-black dark:text-white after:w-0 hover:after:w-full"
    }
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-black
    after:transition-all
    after:duration-300`

  return (
    <>
      {/* HEADER */}
      <header className={`"=bg-white dark:bg-neutral-900 border-b dark:border-neutral-700 sticky top-0 z-50 transition-all duration-300 ${shrink ? "py-2 shadow-md" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-semibold">
            Madotielo Drink's
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex gap-8 text-sm">
            <NavLink to="/novidades" className={linkStyle}>Novidades</NavLink>

            {/* MEGA MENU */}
            <div className="group relative">
              <NavLink to="/bebidas" className={linkStyle}>Bebidas</NavLink>

              <div className="absolute left-0 top-6 hidden group-hover:grid bg-white shadow-xl p-6 grid-cols-2 gap-6 w-72">
                <a href="#">Clássicos</a>
                <a href="#">Sem álcool</a>
                <a href="#">Autorais</a>
                <a href="#">Premium</a>
              </div>
            </div>

            <NavLink to="/eventos" className={linkStyle}>Eventos</NavLink>
            <NavLink to="/personalizacao" className={linkStyle}>Personalização</NavLink>
            <NavLink to="/outlet" className={linkStyle}>Outlet</NavLink>
          </nav>

          {/* ICONES */}
          <div className="hidden md:flex items-center gap-4">

            {/* BUSCA */}
            <div className="relative flex items-center">
              <Search
                size={20}
                className="cursor-pointer"
                onClick={() => setSearchOpen(!searchOpen)}
              />

              <input
                type="text"
                placeholder="Buscar..."
                className={`ml-2 border rounded-lg px-3 py-1 text-sm transition-all duration-300
                ${searchOpen ? "w-40 opacity-100" : "w-0 opacity-0 p-0 border-0"}`}
              />
            </div>

            <Heart className="cursor-pointer" />

            <User className="cursor-pointer" />

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => {
             setDark(!dark)
              document.documentElement.classList.toggle("dark")
              }}
>
              {dark ? <Sun /> : <Moon />}
            </button>

            {/* CARRINHO */}
            <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs px-1 rounded-full">
                {cartCount}
              </span>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-b p-6 space-y-4">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/novidades" onClick={() => setOpen(false)}>Novidades</NavLink>
          <NavLink to="/bebidas" onClick={() => setOpen(false)}>Bebidas</NavLink>
          <NavLink to="/eventos" onClick={() => setOpen(false)}>Eventos</NavLink>
          <NavLink to="/personalizacao" onClick={() => setOpen(false)}>Personalização</NavLink>
          <NavLink to="/outlet" onClick={() => setOpen(false)}>Outlet</NavLink>
        </div>
      )}

      {/* CARRINHO LATERAL */}
      {cartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setCartOpen(false)}
          />

          <div className="fixed right-0 top-0 w-80 h-full bg-white dark:bg-neutral-900 shadow-2xl p-6 z-50 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-4">Seu Carrinho</h2>
            <p className="text-neutral-500">Seu drink está esperando 🍹</p>

            <button
              onClick={() => setCartOpen(false)}
              className="mt-6 w-full bg-black text-white py-2 rounded-lg"
            >
              Fechar
            </button>
          </div>
        </>
      )}
    </>
  )
}
