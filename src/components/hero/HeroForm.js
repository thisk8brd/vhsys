import React, { useState, useEffect } from 'react';

import Gap from './../common/Gap';

function HeroForm(props) {

  const [formData, setformData] = useState({});

  useEffect(() => {
    return () => {
      console.log(formData);
    };
  }, null)

  return <form className="hero__form form">
    <div className="form__content">
      <div className="form__group">
        <label htmlFor="email" className="form__label">Digite seu e-mail</label>
        <input className='form__input' type="text" id='email' name='email' onChange={(e) => {
          setformData({
            ...formData,
            email: e.target.value
          })
        }} />
      </div>
      <div className="form__group">
        <label htmlFor="name" className="form__label">Seu nome completo</label>
        <input className='form__input' type="text" id='name' name='name' onChange={(e) => {
          setformData({
            ...formData,
            name: e.target.value
          })
        }} />
      </div>
      <div className="form__group">
        <label htmlFor="phone" className="form__label">Número do seu telefone</label>
        <input className='form__input' type="text" id='phone' name='phone' onChange={(e) => {
          setformData({
            ...formData,
            phone: e.target.value
          })
        }} />
      </div>
      <div className="form__group">
        <label htmlFor="enterprise" className="form__label">Já tem uma empresa formalizada?</label>
        <select className="form__select">
          <option>This is a native select element</option>
          <option>Apples</option>
          <option>Bananas</option>
          <option>Grapes</option>
          <option>Oranges</option>
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="username" className="form__label">Digite seu nome de usuário</label>
        <input className='form__input' type="text" id='username' name='username' onChange={(e) => {
          setformData({
            ...formData,
            username: e.target.value
          })
        }} />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">Digite sua senha</label>
        <input className='form__input' type="text" id='password' name='password' onChange={(e) => {
          setformData({
            ...formData,
            password: e.target.value
          })
        }} />
      </div>
      <Gap height={'2rem'}/>
      <div className="form__group">
        <button className="btn btn--secondary" onClick={() => console.log('Experimente grátis')}>
          Experimente Grátis
        </button>
      </div>
      <Gap height={'2rem'}/>
      <div className="form__group">
        <p className='form__terms'>Clicando no botão acima você concorda com nossos <a href={'#'} className="form__terms--link">termos de uso</a>.</p>
      </div>
    </div>
  </form>
}

export default HeroForm;