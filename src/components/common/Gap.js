import React from 'react';

function Gap (props) {
  console.log(props);
  return <div className="gap" style={{
    height: props.height || '20rem'
  }}/>
}

export default Gap;