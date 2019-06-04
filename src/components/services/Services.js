import React from 'react';

import Gap from './../common/Gap';

import service1 from './../../assets/images/service_1.png';

function Services(props) {
  return (
    <section className="services">
      <div className="container services__container">
        <div className="services__info">
          <h1 className="heading-3 services__title">
            O sucesso de sua empresa está aqui!
          </h1>
          <p className="services__subtitle">
            Confira nossas principais funcionalidades para você controlar sua empresa
          </p>
          <p className="services__description">
            O software de gestão VHSYS existe para ajudar micro e pequenas empresas a terem mais controle sobre o negócio e praticidade no dia a dia. De forma integrada, o sistema de gestão abrange as áreas de vendas, financeiro, estoque e emissão de notas fiscais eletrônicas.
          </p>
        </div>
        <Gap height='3rem'/>
        <button className="btn btn--services">
          Confira os módulos do VHSYS
        </button>
        <Gap height='5rem'/>
        <ul className="services__list list">
          <li className="services__item list__item">
            <img src={service1} alt="Service 1"/>
            <h5 className="list__title">
              Emissão de Nota Fiscal Eletrônica
            </h5>
            <ul className="services__list--inner">
              <li className="inner__item">Emissor de NF-e NFS-E, NFC-e, CT-e e MDF-e</li>
              <li className="inner__item">Nota fiscal de importação e exportação e carta de correção;</li>
              <li className="inner__item">Relatórios de notas fiscais emitidas</li>
            </ul>
          </li>
          <li className="services__item list__item">
            <img src={service1} alt="Service 1"/>
            <h5 className="list">
              Emissão de Nota Fiscal Eletrônica
            </h5>
            <ul className="services__list--inner">
              <li className="inner__item">Emissor de NF-e NFS-E, NFC-e, CT-e e MDF-e</li>
              <li className="inner__item">Nota fiscal de importação e exportação e carta de correção;</li>
              <li className="inner__item">Relatórios de notas fiscais emitidas</li>
            </ul>
          </li>
          <li className="services__item list__item">
            <img src={service1} alt="Service 1"/>
            <h5 className="list">
              Emissão de Nota Fiscal Eletrônica
            </h5>
            <ul className="services__list--inner">
              <li className="inner__item">Emissor de NF-e NFS-E, NFC-e, CT-e e MDF-e</li>
              <li className="inner__item">Nota fiscal de importação e exportação e carta de correção;</li>
              <li className="inner__item">Relatórios de notas fiscais emitidas</li>
            </ul>
          </li>
          <li className="services__item list__item">
            <img src={service1} alt="Service 1"/>
            <h5 className="list">
              Emissão de Nota Fiscal Eletrônica
            </h5>
            <ul className="services__list--inner">
              <li className="inner__item">Emissor de NF-e NFS-E, NFC-e, CT-e e MDF-e</li>
              <li className="inner__item">Nota fiscal de importação e exportação e carta de correção;</li>
              <li className="inner__item">Relatórios de notas fiscais emitidas</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services;