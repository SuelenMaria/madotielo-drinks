export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 mt-20 transition-colors duration-300">

      {/* NEWSLETTER + APP */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center border-b border-neutral-300 dark:border-neutral-800">

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-3xl font-serif font-semibold mb-2">
            Assine nossa newsletter
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            Cadastre-se e receba promoções exclusivas e saiba tudo antes de todo mundo!
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-3 flex-1 bg-white dark:bg-neutral-900"
            />
            <input
              type="text"
              placeholder="Digite seu nome"
              className="border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-3 flex-1 bg-white dark:bg-neutral-900"
            />
            <button className="bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              CADASTRAR
            </button>
          </div>
        </div>

        {/* APP */}
        <div className="text-center md:text-right">
          <h3 className="text-3xl font-serif font-semibold mb-2">
            Baixe o app
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            Tenha sua loja favorita na palma da mão.
          </p>

          <div className="flex gap-4 justify-center md:justify-end">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-12 hover:scale-105 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-12 hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

        {[
          {
            title: "Sobre",
            items: ["Quem somos", "Sustentabilidade", "Nossa história"]
          },
          {
            title: "Trabalhe conosco",
            items: ["Seja parceiro", "Nossas lojas", "Carreiras"]
          },
          {
            title: "Minha conta",
            items: ["Pedidos", "Favoritos", "Carteira"]
          },
          {
            title: "Suporte",
            items: ["Privacidade", "Termos de uso", "Trocas e devoluções"]
          },
          {
            title: "Atendimento",
            items: ["WhatsApp", "Seg–Sex: 09h às 18h", "Sáb: 08h às 16h"]
          }
        ].map((section, i) => (
          <div key={i}>
            <h4 className="font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-black dark:hover:text-white transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* BENEFÍCIOS */}
      <div className="border-t border-neutral-300 dark:border-neutral-800 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              title: "Entrega rápida",
              text: "Receba seus pedidos com agilidade e segurança."
            },
            {
              title: "Troca facilitada",
              text: "Troque seu pedido em até 7 dias."
            },
            {
              title: "Cashback",
              text: "Ganhe benefícios em novas compras."
            }
          ].map((item, i) => (
            <div key={i}>
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

    </footer>
  )
}