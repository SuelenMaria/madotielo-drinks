export default function HeroStore() {
  return (
    <section className="relative">
      <img
        src="https://images.unsplash.com/photo-1551024709-8f23befc6f87"
        alt="Drinks"
        className="w-full h-[420px] object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-12 text-white">
        <h2 className="text-5xl font-bold mb-4">
          Drinks que transformam seu evento
        </h2>
        <p className="text-lg mb-6">
          Sofisticação, sabor e experiência premium.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-3 font-semibold rounded">
          Ver opções
        </button>
      </div>
    </section>
  )
}
