import Navbar from "@/ui/partials/navbar";
import Footer from "@/ui/components/footer";
import InputText from "@/ui/components/Forms";

export default function FaleConosco() {
  return (
    <>
      <Navbar />
      <section className="w-full h-full min-h-screen bg-secondary flex items-center justify-center p-4">
        <div className="w-full md:w-3/4 lg:w-3/5 xl:w-2/4 2xl:w-2/5 h-auto flex flex-col justify-center items-center bg-primary px-7 py-20 min-w-80 rounded-lg">
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-secondary font-sans font-bold text-5xl drop-shadow-2xl text-center py-6">LOGO NAME</h2>
            <h1 className="text-gray font-sans font-bold text-2xl text-left pt-4">Entrar</h1>
            <p className="text-gray font-sans text-lg text-left">Digite seu e-mail e senha para entrar</p>
          </div>
          <InputText />
        </div>
      </section>
      <Footer />
    </>
  );
}
