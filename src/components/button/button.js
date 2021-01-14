import react from 'react';

import './button.css';

   function Button (props){
      return <button onClick={props.onClick} className="buyButton">{props.children}</button>
  }
  export default Button;

 