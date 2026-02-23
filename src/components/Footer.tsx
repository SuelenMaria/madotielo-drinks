export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-neutral-800 mt-20">

      {/* NEWSLETTER + APP */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center border-b border-neutral-300">

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-3xl font-serif font-semibold mb-2">
            Assine nossa newsletter
          </h3>
          <p className="text-sm text-neutral-600 mb-6">
            Cadastre-se e receba promoções exclusivas e saiba tudo antes de todo mundo!
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="border border-neutral-300 rounded-lg px-4 py-3 flex-1 bg-white"
            />
            <input
              type="text"
              placeholder="Digite seu nome"
              className="border border-neutral-300 rounded-lg px-4 py-3 flex-1 bg-white"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
              CADASTRAR
            </button>
          </div>
        </div>

        {/* APP */}
        <div className="text-center md:text-right">
          <h3 className="text-3xl font-serif font-semibold mb-2">
            Baixe o app
          </h3>
          <p className="text-sm text-neutral-600 mb-6">
            Tenha sua loja favorita na palma da mão.
          </p>

          <div className="flex gap-4 justify-center md:justify-end">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-12"
            />
          </div>
        </div>
      </div>

      {/* LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

        <div>
          <h4 className="font-semibold mb-4">Sobre</h4>
          <ul className="space-y-2 text-neutral-600">
            <li>Quem somos</li>
            <li>Sustentabilidade</li>
            <li>Nossa história</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Trabalhe conosco</h4>
          <ul className="space-y-2 text-neutral-600">
            <li>Seja parceiro</li>
            <li>Nossas lojas</li>
            <li>Carreiras</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Minha conta</h4>
          <ul className="space-y-2 text-neutral-600">
            <li>Pedidos</li>
            <li>Favoritos</li>
            <li>Carteira</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Suporte</h4>
          <ul className="space-y-2 text-neutral-600">
            <li>Privacidade</li>
            <li>Termos de uso</li>
            <li>Trocas e devoluções</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Atendimento</h4>
          <ul className="space-y-2 text-neutral-600">
            <li>WhatsApp</li>
            <li>Seg–Sex: 09h às 18h</li>
            <li>Sáb: 08h às 16h</li>
          </ul>
        </div>

      </div>

      {/* BENEFÍCIOS */}
      <div className="border-t border-neutral-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <p className="font-semibold text-lg">Entrega rápida</p>
            <p className="text-neutral-600 text-sm">
              Receba seus pedidos com agilidade e segurança.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg">Troca facilitada</p>
            <p className="text-neutral-600 text-sm">
              Troque seu pedido em até 7 dias.
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg">Cashback</p>
            <p className="text-neutral-600 text-sm">
              Ganhe benefícios em novas compras.
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}
