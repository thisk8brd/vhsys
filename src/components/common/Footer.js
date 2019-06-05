import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h3 className="heading-3 footer__heading">
          Revolucione a forma de gerenciar o seu negócios com o Sistema de
          Gestão Online Gratuito.
        </h3>
        <button
          className="btn btn--secondary"
          onClick={() => console.log("Experimente grátis")}
        >
          Experimente grátis por 7 dias
        </button>
      </div>
    </footer>
  );
}

export default Footer;
