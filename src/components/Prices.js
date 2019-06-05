import React, { useState } from 'react';

import medal from './../assets/images/medal.png';

import Gap from './../components/common/Gap';

function Prices(props) {
  return (
    <section className="prices">
      <div className="container prices__container">
        <h3 className="heading-3 prices__heading">
          Preços justos, sem adesão sem surpresa
        </h3>
        <p className="prices__description">
          Por ser um sistema para empresas online, você não precisa pagar taxa de instalação e manutenção do software de gestão. Basta acessar o sistema com qualquer dispositivo que tenha acesso à internet. Você pode optar por um dos seis planos disponíveis, todos eles têm acesso total às funcionalidades e aplicativos do software, a variação se dá no número de usuários e emissões de notas fiscais eletrônicas. Veja qual é o melhor plano para as necessidades da sua empresa.
        </p>
        <div className="prices__scrollable">
          <div className="prices__list">
            <div className="prices__item">
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  Usuários
                </li>
                <li className="item-content__item">
                  NF-e e NFS-e
                </li>
                <li className="item-content__item">
                  NFC-e
                </li>
                <li className="item-content__item">
                  CT-e
                </li>
                <li className="item-content__item">
                  Suporte Técnico
                </li>
              </ul>
            </div>
            <div className="prices__item">
              <span className="prices__discount">
                - 30%
              </span>
              <Gap height='2rem' />
              <div className="prices__item--content">
                <img src={medal} alt="" />
                <p className="prices__item--title">
                  MEI
                </p>
                <p className="prices__item--from">
                  <del>De R$59,90</del>
                </p>
                <p className="prices__item--to">
                  por <span>41</span><span> ,93</span>
                </p>
                <p className="prices__item--description">
                  por mês no plano anual
                </p>
                <p className="prices__item--economy">
                  Economize <span>R$ 215,64</span>
                </p>
                <Gap height='2rem' />
                <button className="btn btn--contract">
                  CONTRATAR
                </button>
                <Gap height='2rem' />
              </div>
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  1
                </li>
                <li className="item-content__item">
                  5
                </li>
                <li className="item-content__item">
                  25
                </li>
                <li className="item-content__item">
                  15
                </li>
                <li className="item-content__item">
                  Gratuito e Ilimitado
                </li>
              </ul>
            </div>
            <div className="prices__item">
              <span className="prices__discount">
                - 30%
              </span>
              <Gap height='2rem' />
              <div className="prices__item--content">
                <img src={medal} alt="" />
                <p className="prices__item--title">
                  BRONZE
                </p>
                <p className="prices__item--from">
                  <del>De R$79,90</del>
                </p>
                <p className="prices__item--to">
                  por <span>55</span><span> ,93</span>
                </p>
                <p className="prices__item--description">
                  por mês no plano anual
                </p>
                <p className="prices__item--economy">
                  Economize <span>R$ 287,64</span>
                </p>
                <Gap height='2rem' />
                <button className="btn btn--contract">
                  CONTRATAR
                </button>
                <Gap height='2rem' />
              </div>
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  1
                </li>
                <li className="item-content__item">
                  25
                </li>
                <li className="item-content__item">
                  125
                </li>
                <li className="item-content__item">
                  55
                </li>
                <li className="item-content__item">
                  Gratuito e Ilimitado
                </li>
              </ul>
            </div>
            <div className="prices__item">
              <span className="prices__discount">
                - 30%
              </span>
              <Gap height='2rem' />
              <div className="prices__item--content">
                <img src={medal} alt="" />
                <p className="prices__item--title">
                  PRATA
                </p>
                <p className="prices__item--from">
                  <del>De R$99,90</del>
                </p>
                <p className="prices__item--to">
                  por <span>69</span><span> ,93</span>
                </p>
                <p className="prices__item--description">
                  por mês no plano anual
                </p>
                <p className="prices__item--economy">
                  Economize <span>R$ 359,64</span>
                </p>
                <Gap height='2rem' />
                <button className="btn btn--contract">
                  CONTRATAR
                </button>
                <Gap height='2rem' />
              </div>
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  2
                </li>
                <li className="item-content__item">
                  60
                </li>
                <li className="item-content__item">
                  300
                </li>
                <li className="item-content__item">
                  180
                </li>
                <li className="item-content__item">
                  Gratuito e Ilimitado
                </li>
              </ul>
            </div>
            <div className="prices__item prices__item--featured">
              <span className="prices__discount">
                - 30%
              </span>
              <Gap height='2rem' />
              <div className="prices__item--content">
                <img src={medal} alt="" />
                <p className="prices__item--title">
                  OURO
                </p>
                <p className="prices__item--from">
                  <del>De R$169,90</del>
                </p>
                <p className="prices__item--to">
                  por <span>118</span><span> ,93</span>
                </p>
                <p className="prices__item--description">
                  por mês no plano anual
                </p>
                <p className="prices__item--economy">
                  Economize <span>R$ 611,64</span>
                </p>
                <Gap height='2rem' />
                <button className="btn btn--contract">
                  CONTRATAR
                </button>
                <Gap height='2rem' />
              </div>
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  3
                </li>
                <li className="item-content__item">
                  150
                </li>
                <li className="item-content__item">
                  750
                </li>
                <li className="item-content__item">
                  450
                </li>
                <li className="item-content__item">
                  Gratuito e Ilimitado
                </li>
              </ul>
            </div>
            <div className="prices__item">
              <span className="prices__discount">
                - 30%
              </span>
              <Gap height='2rem' />
              <div className="prices__item--content">
                <img src={medal} alt="" />
                <p className="prices__item--title">
                  PLATINA
                </p>
                <p className="prices__item--from">
                  <del>De R$259,90</del>
                </p>
                <p className="prices__item--to">
                  por <span>181</span><span> ,93</span>
                </p>
                <p className="prices__item--description">
                  por mês no plano anual
                </p>
                <p className="prices__item--economy">
                  Economize <span>R$ 935,64</span>
                </p>
                <Gap height='2rem' />
                <button className="btn btn--contract">
                  CONTRATAR
                </button>
                <Gap height='2rem' />
              </div>
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  4
                </li>
                <li className="item-content__item">
                  300
                </li>
                <li className="item-content__item">
                  1500
                </li>
                <li className="item-content__item">
                  900
                </li>
                <li className="item-content__item">
                  Gratuito e Ilimitado
                </li>
              </ul>
            </div>
            <div className="prices__item">
              <span className="prices__discount">
                - 30%
              </span>
              <Gap height='2rem' />
              <div className="prices__item--content">
                <img src={medal} alt="" />
                <p className="prices__item--title">
                  DIAMANTE
                </p>
                <p className="prices__item--from">
                  <del>De R$299,90</del>
                </p>
                <p className="prices__item--to">
                  por <span>209</span><span> ,93</span>
                </p>
                <p className="prices__item--description">
                  por mês no plano anual
                </p>
                <p className="prices__item--economy">
                  Economize <span>R$ 1079,64</span>
                </p>
                <Gap height='2rem' />
                <button className="btn btn--contract">
                  CONTRATAR
                </button>
                <Gap height='2rem' />
              </div>
              <ul className="prices__item-content item-content">
                <li className="item-content__item">
                  5
                </li>
                <li className="item-content__item">
                  500
                </li>
                <li className="item-content__item">
                  2500
                </li>
                <li className="item-content__item">
                  1500
                </li>
                <li className="item-content__item">
                  Gratuito e Ilimitado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices;