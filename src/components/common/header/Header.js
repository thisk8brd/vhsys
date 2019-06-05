import React, { useState, createContext, useContext, useReducer } from "react";
import { useStateValue } from "../../../App";

// REDUCERS
import { reducer, initialState } from "./reducers/HeaderReducer";

import logo from "./../../../assets/images/logo.png";

const HeaderContext = createContext();
export const useHeaderState = () => useContext(HeaderContext);

function Header() {
  const [headerActive, showHeader] = useState(false);

  return (
    <HeaderContext.Provider value={useReducer(reducer, initialState)}>
      <header className="header">
        <div className="container header__container">
          <nav className="header__nav">
            <img className="header__logo logo" src={logo} alt="VHSYS Logo" />
            <ul
              className={`header__navbar navbar${
                headerActive ? " active" : ""
              }`}
            >
              <button
                className="btn btn--close"
                onClick={() => showHeader(false)}
              >
                <svg
                  className="icon icon--close"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21.9 21.9"
                >
                  <path d="M14.1 11.3c-.2-.2-.2-.5 0-.7l7.5-7.5c.2-.2.3-.5.3-.7s-.1-.5-.3-.7L20.2.3c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.7.3l-7.5 7.5c-.2.2-.5.2-.7 0L3.1.3C2.9.1 2.6 0 2.4 0s-.5.1-.7.3L.3 1.7c-.2.2-.3.5-.3.7s.1.5.3.7l7.5 7.5c.2.2.2.5 0 .7L.3 18.8c-.2.2-.3.5-.3.7s.1.5.3.7l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3l7.5-7.5c.2-.2.5-.2.7 0l7.5 7.5c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.2-.2.3-.5.3-.7s-.1-.5-.3-.7l-7.5-7.5z" />
                </svg>
              </button>
              <li className="navbar__item">
                <span className="navbar__item--label">Fale conosco</span>
                <span className="navbar__item--value">0800 007 0017</span>
              </li>
              <li className="navbar__item">
                <span className="navbar__item--label">WhatsApp</span>
                <span className="navbar__item--value">(41) 99871-8914</span>
              </li>
              <li className="navbar__item">
                <button
                  className="btn btn--primary"
                  onClick={() => console.log("Call")}
                >
                  Nós Ligamos
                </button>
              </li>
            </ul>
            <div
              className="header__menu menu"
              onClick={() => showHeader(!headerActive)}
            >
              <svg
                className="icon icon--menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 396.667 396.667"
              >
                <path d="M17 87.833h362.667c9.35 0 17-7.65 17-17s-7.65-17-17-17H17c-9.35 0-17 7.65-17 17s7.65 17 17 17zM17 215.333h362.667c9.35 0 17-7.65 17-17s-7.65-17-17-17H17c-9.35 0-17 7.65-17 17s7.65 17 17 17zM17 342.833h362.667c9.35 0 17-7.65 17-17s-7.65-17-17-17H17c-9.35 0-17 7.65-17 17s7.65 17 17 17z" />
              </svg>
            </div>
          </nav>
        </div>
      </header>
    </HeaderContext.Provider>
  );
}

export default Header;
