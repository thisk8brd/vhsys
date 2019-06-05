import React from "react";

import laptop from "./../assets/images/laptop.png";

function PromoGradient(props) {
  return (
    <section className="promo--gradient">
      <div className="container promo--gradient__container">
        <div className="promo--gradient__image">
          <img src={laptop} alt="Laptop" />
        </div>
        <div className="promo--gradient__content">
          <p className="promo--gradient__text">
            Faça como <strong>mais de 150 mil</strong> pequenas e médias
            empresas e experimente o Sistema de Gestão Online Gratuito por 7
            dias!
          </p>
          <button className="btn btn--secondary btn--is-green">
            Experimente grátis por 7 dias
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromoGradient;
