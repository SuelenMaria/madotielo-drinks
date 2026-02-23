export default function Hero() {
  return (
    <section className="relative h-[420px] w-full">
      
      {/* Imagem */}
      <img
        src="https://images.unsplash.com/photo-1514361892635-cebbd8caa2a6"
        alt="Drinks"
        className="w-full h-full object-cover"
      />

      {/* overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* texto */}
      <div className="absolute inset-0 flex flex-col justify-center pl-12 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Drinks Premium para seu Evento
        </h1>

        <p className="text-lg mb-6 max-w-xl">
          Sofisticação, sabor e experiência profissional para tornar seu evento inesquecível.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg w-fit">
          Fazer Reserva
        </button>
      </div>
    </section>
  )
}
