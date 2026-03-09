import { useParams, Link } from "react-router-dom"

const drinks = [
  {
    id: "mojito",
    nome: "Mojito",
    preco: "R$ 18",
    img: "https://images.unsplash.com/photo-1582571352039-38f70a03d3b9?q=80&w=800",
    descricao: "Drink refrescante com hortelã, limão e rum.",
    ingredientes: ["Rum branco", "Hortelã", "Limão", "Açúcar", "Água com gás"]
  },
  {
    id: "caipirinha",
    nome: "Caipirinha",
    preco: "R$ 15",
    img: "https://images.unsplash.com/photo-1564758866813-9d3f3c1f63b7?q=80&w=800",
    descricao: "Clássico brasileiro feito com cachaça, limão e açúcar.",
    ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"]
  },
  {
    id: "gin",
    nome: "Gin Tônica",
    preco: "R$ 20",
    img: "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=800",
    descricao: "Gin premium com água tônica e especiarias.",
    ingredientes: ["Gin", "Água tônica", "Limão", "Gelo"]
  },
  {
    id: "aperol",
    nome: "Aperol Spritz",
    preco: "R$ 22",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800",
    descricao: "Drink italiano leve e refrescante.",
    ingredientes: ["Aperol", "Prosecco", "Água com gás", "Laranja"]
  }
]

export default function DrinkDetalhe() {

  const { id } = useParams()

  const drink = drinks.find((d) => d.id === id)

  if (!drink) {
    return (
      <div className="p-10 text-center">
        <p>Drink não encontrado</p>
        <Link to="/" className="text-yellow-500">
          Voltar
        </Link>
      </div>
    )
  }

  const whatsappMsg = `Olá! Quero pedir um ${drink.nome}`

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <Link
        to="/"
        className="text-yellow-500 mb-8 block"
      >
        ← Voltar
      </Link>

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={drink.img}
          alt={drink.nome}
          className="rounded-2xl w-full h-[420px] object-cover shadow-lg"
        />

        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-4">
            {drink.nome}
          </h1>

          <p className="text-neutral-500 mb-6">
            {drink.descricao}
          </p>

          <p className="text-2xl font-bold text-yellow-500 mb-6">
            {drink.preco}
          </p>

          <h3 className="font-semibold mb-3">
            Ingredientes
          </h3>

          <ul className="mb-8 space-y-2">
            {drink.ingredientes.map((item, index) => (
              <li key={index}>
                🍋 {item}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">

            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600">
              Adicionar ao carrinho
            </button>

            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Pedir no WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}