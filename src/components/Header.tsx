import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X
} from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `relative pb-1 transition ${
      isActive
        ? "text-black font-semibold after:w-full"
        : "text-neutral-500 hover:text-black after:w-0 hover:after:w-full"
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
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-semibold text-black">
          Madotielo Drink's
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm">
          <NavLink to="/novidades" className={linkStyle}>Novidades</NavLink>
          <NavLink to="/bebidas" className={linkStyle}>Bebidas</NavLink>
          <NavLink to="/eventos" className={linkStyle}>Eventos</NavLink>
          <NavLink to="/personalizacao" className={linkStyle}>Personalização</NavLink>
          <NavLink to="/outlet" className={linkStyle}>Outlet</NavLink>
        </nav>

        {/* ICONES */}
        <div className="hidden md:flex items-center gap-4 text-neutral-700">
          <Search size={20} className="cursor-pointer hover:text-black" />
          <Heart size={20} className="cursor-pointer hover:text-black" />
          <User size={20} className="cursor-pointer hover:text-black" />
          <ShoppingCart size={20} className="cursor-pointer hover:text-black" />
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg">
          <NavLink onClick={()=>setOpen(false)} to="/novidades">Novidades</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/bebidas">Bebidas</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/eventos">Eventos</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/personalizacao">Personalização</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/outlet">Outlet</NavLink>
        </nav>

        <div className="flex justify-center gap-6 mt-6 text-neutral-700">
          <Search size={22} />
          <Heart size={22} />
          <User size={22} />
          <ShoppingCart size={22} />
        </div>
      </div>
    </header>
  )
}
