import Navbar from "@/ui/partials/navbar";
import Footer from "@/ui/components/footer";
import Image from "next/image";
import Phone from "@/ui/assets/faleconosco/phone.svg";
import Email from "@/ui/assets/faleconosco/email.svg";
import WhatsApp from "@/ui/assets/faleconosco/whatsapp.svg";

export default function FaleConosco() {
  return (
    <>
      <Navbar />
      <section className="w-full h-96 flex items-center justify-center relative p-4">
        <div className="absolute inset-0 bg-faleconosco bg-cover bg-no-repeat bg-center brightness-50"></div>
        <h1 className="text-primary font-sans font-bold text-5xl drop-shadow-2xl text-center">Fale Conosco</h1>
      </section>
      <section className="w-full h-auto flex flex-col items-center justify-center my-16">
        <div className="w-full h-auto flex flex-col items-start justify-center md:w-9/12 px-9">
          <h2 className="text-black font-sans font-bold text-2xl text-left pt-4">ENTRE EM CONTATO</h2>
          <h3 className="text-gray font-sans font-bold text-base pt-4 text-left">Horário de atendimento</h3>
          <h4 className="text-secondary font-sans font-bold text-lg pt-1 text-left">
            De segunda a sexta: 9:00 às 17:00.
          </h4>
          <p className="text-black font-sans text-lg pt-4 text-left">
            Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de mais informações sobre nossos
            serviços, não hesite em entrar em contato conosco. Nossa equipe está pronta para oferecer o suporte
            necessário e responder às suas perguntas com rapidez e eficiência.
          </p>
          <p className="text-black font-sans text-lg pt-4 text-left">
            <span className="text-black font-sans text-lg pt-4 text-left font-bold">
              Precisa de ajuda ou quer saber mais?
            </span>{" "}
            Entre em contato conosco e nossa equipe estará pronta para te atender rapidamente, além de um especializado
            atendimento ao cliente.
          </p>
          <div className="w-full h-auto flex items-center justify-center xl:justify-evenly my-16 flex-wrap xl:flex-row flex-col">
            <div className="xl:w-64 w-full h-auto flex flex-col items-center justify-center lg:my-10">
              <Image src={Phone} alt="phone" width={80} height={80} />
              <span className="text-black font-sans text-lg pt-4 text-center font-bold">(79) 9 0000 - 0000</span>
            </div>
            <div className="xl:w-64 w-full h-auto flex flex-col items-center justify-center xl:my-0 my-10">
              <Image src={Email} alt="Email" width={80} height={80} />
              <span className="text-black font-sans text-lg pt-4 text-center font-bold">suporte@gmail.com</span>
            </div>
            <div className="xl:w-64 w-full h-auto flex flex-col items-center justify-center lg:my-10">
              <a href="https://web.whatsapp.com/" target="_blank">
                <Image src={WhatsApp} alt="WhatsApp" width={80} height={80} />
              </a>
              <span className="text-black font-sans text-lg pt-4 text-center font-bold">(79) 9 0000 - 0000</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
