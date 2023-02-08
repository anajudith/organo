import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
    <form>
        <h2>Preencha os dados para criar os card do colaborador</h2>
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Anexe sua url" />
    </form>
  </section>
  )
};

export default Formulario;
