import React, { useState } from 'react';

import img1 from './../assets/images/solution_1.png';
import img2 from './../assets/images/solution_2.png';
import img3 from './../assets/images/solution_3.png';

import Gap from './common/Gap';

const initialState = {
  title: 'Veja outras soluções do sistema de gestão VHSYS',
  solutions: [
    {
      title: 'Integração contábil',
      description: 'Integre seu financeiro com o seu contador. Ele pode extrair informações direto do seu sistema.',
      image: img1
    },
    {
      title: 'Recursos Adicionais',
      description: 'Uma loja de aplicativos integrada para você ter ferramentas de gestão exclusivas no seu negócio.',
      image: img2
    },
    {
      title: 'Aplicativo mobile',
      description: 'Tenha o controle da sua empresa na palma de suas mãos. Aplicativo disponível para Andoid e iOS.',
      image: img3
    }
  ]
}

function Solutions(props) {
  const [content, setcontent] = useState(initialState);

  const renderSolution = (solution) => (
    <li className="list__item item">
      <div className="item__img">
        <img src={solution.image} alt="" />
      </div>
      <h5 className="item__title">
        {solution.title}
      </h5>
      <p className="item__description">
        {solution.description}
      </p>
    </li>
  )

  return (
    <section className="solutions">
      <div className="container solutions__container">
        <h3 className="heading-1 solutions__heading">
          {content.title}
        </h3>
        <Gap height='5rem'/>
        <ul className="list solutions__list">
          {content.solutions && content.solutions.length > 0 ? content.solutions.map(solution => renderSolution(solution)) : null}
        </ul>
      </div>
    </section>
  )
}

export default Solutions;