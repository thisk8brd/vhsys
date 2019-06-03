import React, {createContext, useContext, useReducer} from 'react';

// ROUTER
import {BrowserRouter, Route} from 'react-router-dom';

// COMPONENTS
import Header from './components/common/header/Header';
import Footer from './components/common/Footer';

// PAGES
import HomePage from './pages/HomePage';

const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);

function App() {
  const initialState = {
    theme: { primary: 'green' }
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };
        
      default:
        return state;
    }
  };
  return (
    <BrowserRouter>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        <Header></Header>
        <HomePage></HomePage>
        <Footer></Footer>
      </StateContext.Provider>
    </BrowserRouter>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <HomePage/>
//       <Footer/>
//     </div>
//   );
// }

export default App;
