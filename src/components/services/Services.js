import React, { useEffect, useState } from "react";

import Gap from "./../common/Gap";

import service1 from "./../../assets/images/service_1.png";
import service2 from "./../../assets/images/service_2.png";
import service3 from "./../../assets/images/service_3.png";
import service4 from "./../../assets/images/service_4.png";

const initialState = {
  title: "O sucesso de sua empresa está aqui!",
  subtitle:
    "Confira nossas principais funcionalidades para você controlar sua empresa",
  description:
    "O software de gestão VHSYS existe para ajudar micro e pequenas empresas a terem mais controle sobre o negócio e praticidade no dia a dia. De forma integrada, o sistema de gestão abrange as áreas de vendas, financeiro, estoque e emissão de notas fiscais eletrônicas.",
  button: "Confira os módulos do VHSYS",
  services: [
    {
      title: "Emissão de Nota Fiscal Eletrônica",
      image: service1,
      items: [
        "Emissor de NF-e, NFS-e, NFC-e, CT-e e MDF-e;",
        "Nota fiscal de importação e exportação e carta de correção;",
        "Relatórios de notas fiscais emitidas"
      ]
    },
    {
      title: "Controle Financeiro",
      image: service2,
      items: [
        "Contas a pagar e receber, fluxo de Caixa, DRE Gerencial;",
        "Conciliação e controle de contas bancárias;",
        "Gestão de custos e serviços recorrentes;",
        "Relatórios financeiros completos."
      ]
    },
    {
      title: "Controle de Vendas",
      image: service3,
      items: [
        "Sistema PDV - Frente de caixa;",
        "Emissão de boletos, pedidos e recibos;",
        "Cadastro e gestão de clientes e vendedores;",
        "Relatórios de vendas;"
      ]
    },
    {
      title: "Controle de Estoque",
      image: service4,
      items: [
        "Giro de estoque; ",
        "Controle de compras e notas fiscais de entrada;",
        "Cadastro de produtos, fornecedores e transportadoras",
        "Relatórios de estoque."
      ]
    }
  ]
};

function Services(props) {
  const [content, setContent] = useState(initialState);

  useEffect(() => {
    return () => {
      console.log("test");
    };
  }, null);

  const renderServiceItem = item => (
    <li key={item} className="inner__item">
      {item}
    </li>
  );

  const renderService = service => (
    <li key={service.title} className="services__item list__item">
      <div className="list__image">
        <img src={service.image} alt="Service 1" />
      </div>
      <h5 className="list__title">{service.title}</h5>
      {service.items && service.items.length > 0 ? (
        <ul className="services__list--inner">
          {service.items.map(item => renderServiceItem(item))}
        </ul>
      ) : null}
    </li>
  );

  return (
    <section className="services">
      <div className="container services__container">
        <div className="services__info">
          <h1 className="heading-3 services__title">{content.title}</h1>
          <p className="services__subtitle">{content.subtitle}</p>
          <p className="services__description">{content.description}</p>
        </div>
        <Gap height="5rem" />
        <button className="btn btn--services">{content.button}</button>
        <Gap height="10rem" />
        <ul className="services__list list">
          {content.services && content.services.length > 0
            ? content.services.map(service => renderService(service))
            : null}
        </ul>
      </div>
    </section>
  );
}

export default Services;
