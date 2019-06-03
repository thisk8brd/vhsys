import React, {useState, useEffect} from 'react';

function HeroForm (props) {

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
        }}/>
      </div>
      <div className="form__group">
        <label htmlFor="name" className="form__label">Seu nome completo</label>
        <input className='form__input' type="text" id='name' name='name' onChange={(e) => {
          setformData({
            ...formData,
            name: e.target.value
          })
        }}/>
      </div>
      <div className="form__group">
        <label htmlFor="phone" className="form__label">Número do seu telefone</label>
        <input className='form__input' type="text" id='phone' name='phone' onChange={(e) => {
          setformData({
            ...formData,
            phone: e.target.value
          })
        }}/>
      </div>
      <div className="form__group">
        <label htmlFor="enterprise" className="form__label">Já tem uma empresa formalizada?</label>
        <select name="enterprise" id="enterprise" className="form__input form__input--select">
          <option value="1" className='form__option'>
            Selecione uma opção
          </option>
          <option value="1" className='form__option'>
            Selecione uma opção
          </option>
          <option value="1" className='form__option'>
            Selecione uma opção
          </option>
        </select>
      </div>
      <div className="form__group">
        <label htmlFor="username" className="form__label">Digite seu nome de usuário</label>
        <input className='form__input' type="text" id='username' name='username' onChange={(e) => {
          setformData({
            ...formData,
            username: e.target.value
          })
        }}/>
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">Digite sua senha</label>
        <input className='form__input' type="text" id='password' name='password' onChange={(e) => {
          setformData({
            ...formData,
            password: e.target.value
          })
        }}/>
      </div>
    </div>
  </form>
}

export default HeroForm;