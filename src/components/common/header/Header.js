import React from 'react';
import {useStateValue} from '../../../App';

function Header () {
  const [{ theme }, dispatch] = useStateValue();
  console.log(theme);
  return (
    <header className="header">
      <h1>Header</h1>
      <button onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'blue' }
      })}>change theme</button>
    </header>
  )
}

export default Header;