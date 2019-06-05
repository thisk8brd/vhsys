import React from 'react';

function Promo (props) {
  return (
    <section className="promo">
      <div className="container promo__container">
        <h3 className="heading-1 promo__heading">
        Sistema de gestão completo para emitir notas fiscais, controlar o financeiro, gerenciar vendas e estoque! 
        </h3>
        <button className="btn btn--secondary">
          Experimente grátis por 7 dias
        </button>
      </div>
    </section>
  )
}

export default Promo;