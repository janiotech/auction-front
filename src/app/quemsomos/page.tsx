import Navbar from "@/ui/partials/navbar";
import Footer from "@/ui/components/footer";
import Slider from "@/ui/components/slider/quemsomos";

export default function QuemSomos() {
  return (
    <>
      <Navbar />
      <section className="w-full h-96 flex items-center justify-center relative p-4">
        <div className="absolute inset-0 bg-quemsomos bg-cover bg-no-repeat bg-center brightness-50"></div>
        <h1 className="text-primary font-sans font-bold text-5xl drop-shadow-2xl text-center">Sobre nós</h1>
      </section>
      <section className="w-full h-auto flex flex-col items-center justify-center my-16 py-20">
        <div className="w-full h-auto flex flex-col items-center justify-center md:items-start md:w-9/12 px-9">
          <h2 className="text-black font-sans font-bold text-2xl text-left py-4">
            O GRUPO LEILÕES É A ORGANIZAÇÃO MAIS ABRANGENTE DO PAÍS.
          </h2>
          <p className="text-black font-sans text-lg pt-4 text-left">
            Atuamos com expertise no mercado de leilões extrajudiciais e judiciais, reunindo as melhores oportunidades
            no Brasil e exterior. Alienamos veículos, imóveis e bens diversos para os maiores bancos, financeiras,
            construtoras e poderes públicos nacionais, com alto grau de eficiência. Realizamos também leilões entre
            pessoas físicas, conectando comprador direto ao vendedor.
          </p>
          <p className="text-black font-sans text-lg pt-4 text-left">
            Para facilitar a sua experiência com o leilão, oferecemos serviços de:{" "}
            <span className="text-black font-sans text-lg pt-4 text-left font-bold">
              documentação e financiamento para veículos e imóveis, despachante, vistoria especial, remoção e guarda de
              veículos
            </span>
            , além de um especializado atendimento ao cliente
          </p>
        </div>
      </section>
      <section className="w-full h-auto flex-col items-center justify-center py-20 lg:px-14 px-9 bg-secondary">
        <h3 className="text-primary font-sans font-bold text-3xl pt-4 text-left">Nossos Clientes</h3>
        <p className="text-primary font-sans text-lg pt-1 text-left">
          Veja alguns comentários deixados por nossos clientes.
        </p>
        <Slider />
      </section>
      <Footer />
    </>
  );
}
