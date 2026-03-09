export default function HeroStore() {
  return (
    <section className="relative">
      <img
        src="https://images.unsplash.com/photo-1551024709-8f23befc6f87"
        alt="Drinks"
        className="w-full h-[420px] object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex flex-col justify-center pl-12 pr-6 text-white">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Drinks que transformam seu evento
        </h2>

        <p className="text-lg text-neutral-200 mb-6 max-w-xl">
          Sofisticação, sabor e experiência premium.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-3 font-semibold rounded-lg w-fit">
          Ver opções
        </button>
      </div>
    </section>
  )
}