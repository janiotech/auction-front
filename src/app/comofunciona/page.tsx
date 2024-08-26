import Navbar from "@/ui/partials/navbar";
import Carousel from "@/ui/components/slider";
import Categories from "@/ui/partials/categories";
import Footer from "@/ui/components/footer";
import AccordionUsage from "@/ui/components/accordion";

const DatesInfo = [
  {
    title: "1. Faça o cadastro",
    paragraph:
      "O primeiro passo é realizar o cadastro no site de leilão na página de cadastro. Vamos solicitar os dados pessoais, endereço, email, telefone para que possamos validar o seu cadastro. É possível realizar o cadastro de Empresa.",
  },
  {
    title: "2. Envie seus documentos",
    paragraph:
      "Envie seus documentos para Pessoa Física ou Jurídica, conforme instruções que serão apresentadas após o seu cadastro. Iremos solicitar: RG ou CNH, Comprovante de endereço e Selfie, caso seja cadastro de Pessoa Jurídica ainda serão solicitados Contrato Social e Cartão CNPJ para efetivar seu cadastro.",
  },
  {
    title: "3. Aguarde o e-mail de confirmação",
    paragraph:
      "Após conferir os dados pessoais com os documentos enviados, vamos encaminhar um email informando que o cadastro foi habilitado para dar lance no leilão que desejar. Caso ocorra alguma inconsistência nos dados enviados, avisaremos via email os documentos que deverá ser enviado novamente.",
  },
  {
    title: "4. Habilite-se no leilão",
    paragraph:
      "Antes de enviar lances em um lote, deverá habilitar-se no leilão para participar. O aceite do regulamento para participar do leilão se encontra abaixo dos valores de lances.",
  },
  {
    title: "5. Escolha um veículo/lote e efetue lance",
    paragraph:
      "Você está habilitado para realizar lances no leilão que habilitou-se no passo anterior. Entre na disputa e seja o vencedor.",
  },
  {
    title: "6. Retirada do veículo arrematado",
    paragraph:
      "Na disputa de uma lote/oferta, caso seja o vencedor do lote, realize o pagamento e em seguida agende a retirada da documentaçao/produto",
  },
];

export default function ComoFunciona() {
  return (
    <>
      <Navbar />
      <section className="w-full h-96 flex items-center justify-center relative p-4">
        <div className="absolute inset-0 bg-comofunciona bg-cover bg-no-repeat bg-center brightness-50"></div>
        <h1 className="text-primary font-sans font-bold text-5xl drop-shadow-2xl text-center">
          Como funciona um leilão
        </h1>
      </section>
      <section className="w-full h-auto flex items-center justify-center flex-col py-16">
        <div className="w-4/5 h-auto flex items-start justify-center flex-col">
          <h2 className="text-black font-sans font-bold text-4xl text-left py-4">Confira passo a passo</h2>
          <p className="text-black font-sans text-lg pt-4 text-left">
            Para você que nunca participou de um leilão, segue um guia: leilão para iniciantes.
          </p>
          <p className="text-black font-sans text-lg pt-4 text-left">
            O leilão funciona da seguinte maneira: os produtos são separados em "lotes". Cada lote pode conter um item
            ou conjunto de itens. É estipulado um valor mínimo para o lote que está sendo submetido a leilão.
          </p>
          <p className="text-black font-sans text-lg pt-4 text-left">
            Vence o leilão o comprador que der o lance mais alto acima do valor previamente estipulado pelo comitente.
            Se o valor for menor, o lote entra na situação: Condicional. O vendedor irá responder se aceita o valor que
            foi arrematado o lote.
          </p>
          <div className="w-full h-auto flex items-center justify-start flex-wrap mt-8">
            {DatesInfo.map((item, index) => (
              <AccordionUsage title={item.title} paragraph={item.paragraph} key={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
