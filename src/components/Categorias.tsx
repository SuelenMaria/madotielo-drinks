const categorias = [
  {
    nome: "Drinks Clássicos",
    imagem: "https://images.unsplash.com/photo-1582571352032-448f1e7f4a7a"
  },
  {
    nome: "Drinks Tropicais",
    imagem: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
  },
  {
    nome: "Bartenders Profissionais",
    imagem: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
  },
  {
    nome: "Eventos Corporativos",
    imagem: "https://images.unsplash.com/photo-1511578314322-379afb476865"
  }
]

export default function Categorias() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Escolha por Categoria
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categorias.map((cat, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden cursor-pointer group">
            
            <img
              src={cat.imagem}
              className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-2">
                {cat.nome}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
