import react from 'react';
import './input.css';

function Input(props){
    return <input id="inputId" type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>;
}
export default Input;