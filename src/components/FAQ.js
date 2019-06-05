import React, { useState } from "react";

import arrow from "./../assets/images/arrow_down.png";

import parse from "react-html-parser";

const initialState = {
  title: "Perguntas e respostas sobre Sistema de Gestão Online Gratuito",
  questions: [
    {
      id: 1,
      question: "Quais as vantagens do sistema para clinica veterinária VHSYS?",
      answer: `<p>
      Sistema de gestão é um software que te ajuda a gerenciar as
      atividades da sua empresa. Através de uma plataforma inteligente
      ele te permite controlar o financeiro, vendas ou prestação de
      serviços, estoque, clientes, produtos, contas bancárias. Te
      permite emitir nota fiscal eletrônica (nf-e), cupons fiscais,
      boletos, pedidos, orçamentos, ordens de serviços e muito mais.{" "}
    </p>
    <p>
      Com um sistema de gestão é possível receber relatórios
      gerenciais, indicadores e gráficos e visualizar os resultados da
      empresa de forma simples e rápida. Isso te ajuda a ter uma visão
      estratégica e tomar decisões com mais facilidade.
    </p>
    <p>
      O sistema de gestão também centraliza as informações de todos os
      setores do negócio e, por isso, consegue automatizar tarefas.
      Com poucos cliques você pode, por exemplo, preencher uma nota
      fiscal eletrônica, fazer um orçamento, lançar contas no
      financeiro, baixar produtos do estoque, etc.
    </p>`
    },
    {
      id: 2,
      question: " O sistema de gestão online é gratuito?",
      answer: `<p>
      Sistema de gestão é um software que te ajuda a gerenciar as
      atividades da sua empresa. Através de uma plataforma inteligente
      ele te permite controlar o financeiro, vendas ou prestação de
      serviços, estoque, clientes, produtos, contas bancárias. Te
      permite emitir nota fiscal eletrônica (nf-e), cupons fiscais,
      boletos, pedidos, orçamentos, ordens de serviços e muito mais.{" "}
    </p>
    <p>
      Com um sistema de gestão é possível receber relatórios
      gerenciais, indicadores e gráficos e visualizar os resultados da
      empresa de forma simples e rápida. Isso te ajuda a ter uma visão
      estratégica e tomar decisões com mais facilidade.
    </p>
    <p>
      O sistema de gestão também centraliza as informações de todos os
      setores do negócio e, por isso, consegue automatizar tarefas.
      Com poucos cliques você pode, por exemplo, preencher uma nota
      fiscal eletrônica, fazer um orçamento, lançar contas no
      financeiro, baixar produtos do estoque, etc.
    </p>`
    },
    {
      id: 3,
      question:
        " Quais são as funcionalidades do sistema de gestão online da VHSYS?",
      answer: `<p>
      Sistema de gestão é um software que te ajuda a gerenciar as
      atividades da sua empresa. Através de uma plataforma inteligente
      ele te permite controlar o financeiro, vendas ou prestação de
      serviços, estoque, clientes, produtos, contas bancárias. Te
      permite emitir nota fiscal eletrônica (nf-e), cupons fiscais,
      boletos, pedidos, orçamentos, ordens de serviços e muito mais.{" "}
    </p>
    <p>
      Com um sistema de gestão é possível receber relatórios
      gerenciais, indicadores e gráficos e visualizar os resultados da
      empresa de forma simples e rápida. Isso te ajuda a ter uma visão
      estratégica e tomar decisões com mais facilidade.
    </p>
    <p>
      O sistema de gestão também centraliza as informações de todos os
      setores do negócio e, por isso, consegue automatizar tarefas.
      Com poucos cliques você pode, por exemplo, preencher uma nota
      fiscal eletrônica, fazer um orçamento, lançar contas no
      financeiro, baixar produtos do estoque, etc.
    </p>`
    }
  ]
};

function FAQ(props) {
  const [content, setcontent] = useState(initialState);

  const showAnswer = id => {
    let newQuestions = content.questions.map(question => {
      let newQuestion = question;
      let active = question.active || false;
      if (question.id === id) {
        question.active = !active;
      }
      return newQuestion;
    });
    console.log(newQuestions);
    setcontent({
      ...content,
      questions: newQuestions
    });
  };

  const renderQuestions = question => (
    <li key={question.id} className="faq__item item">
      <div className="item__content">
        <button className="btn" onClick={() => showAnswer(question.id)}>
          <p className="faq__question">
            <strong>{question.id}.</strong> {question.question}
          </p>
        </button>
        <div
          className={
            question.active ? "faq__answer faq__answer--active" : "faq__answer"
          }
        >
          {parse(question.answer)}
        </div>
      </div>
      <button
        className={
          question.active ? "btn btn__arrow btn__arrow--up" : "btn btn__arrow"
        }
        onClick={() => showAnswer(question.id)}
      >
        <img src={arrow} alt="arrow" className="faq__arrow" />
      </button>
    </li>
  );

  return (
    <section className="faq">
      <div className="container faq__container">
        <h3 className="heading-3 faq__heading">{content.title}</h3>
        <ul className="faq__questions">
          {content.questions && content.questions.length > 0
            ? content.questions.map(question => renderQuestions(question))
            : null}
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
