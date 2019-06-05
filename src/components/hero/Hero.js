import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Gap from "../common/Gap";
import HeroForm from "./HeroForm";

// IMAGES
import bg from "./../../assets/images/bg.png";
import icon from "./../../assets/images/check.png";

const content = {
  subtitle: "Sistema de gestão completo para pequenas e médias empresas",
  text:
    "O VHSYS é o Sistema de Gestão Empresarial Online que integra todas as áreas da sua empresa. Com ele você têm:",
  list: [
    "Emissão de notas fiscais eletrônicas;",
    "Gestão de vendas e estoque;",
    "Controle financeiro;",
    "Emissão de boletos;",
    "Orçamento de vendas;",
    "Integração contábil;"
  ]
};

function Hero(props) {
  const renderBannerItem = item => {
    return (
      <li key={item} className="banner-list__item">
        <img className={"icon banner-list__icon"} src={icon} alt="check icon" />
        <span>{item}</span>
      </li>
    );
  };

  return (
    <section className="hero">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url("${bg}")`
        }}
      />
      <Gap height="7rem" />
      <div className="container hero__container">
        <div className="hero__content">
          <ul className="breadcrumb hero__breadcrumb">
            <li className="breadcrumb__item">
              <Link to={"#"}>Página inicial</Link>
            </li>
            <li className="breadcrumb__item">
              <Link to="#">Experimente Grátis</Link>
            </li>
          </ul>
          <Gap height={"2rem"} />
          <div className="hero__banner-info">
            <h1 className="heading heading-1 hero__heading">
              <span>Sistema de Gestão Online</span>
              <span>
                <span className="is--green">Experimente Grátis</span> por 7
                dias!
              </span>
            </h1>
            <Gap height={"4rem"} />
            <h4 className="heading heading-4">{content.subtitle || ""}</h4>
            <Gap height={"1rem"} />
            <p className="hero__paragraph">{content.text || ""}</p>
            <Gap height={"2rem"} />
            <ul className="hero__banner-list banner-list">
              {content && content.list && content.list.length > 0
                ? content.list.map(item => renderBannerItem(item))
                : null}
            </ul>
          </div>
        </div>
        <HeroForm />
      </div>
    </section>
  );
}

export default Hero;
