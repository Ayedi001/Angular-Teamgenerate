import React from 'react';
import aa from './images/logo.svg';
import './Navbar/Nav.css'
export default function Nav(props){

const styles = {nav:{
    backgroundColor: props.copy? "white" : "#202020"},
an:{
    color: props.copy?  "#202020" : "white"}
}
    return(
        <div className="nav" style={styles.nav}>
          <img src={aa} alt="logo is here" ></img>
            <ul className ="list" style={styles.an}>
                <li ><a href="#"></a>home</li>
                <li ><a href="#"></a>about</li>
                <li ><a href="#"></a>work</li>
            </ul>
            <button className= "btnn" onClick={props.handleClick} >
                
                <div>{props.copy ? "🌕"  : "🌒" }</div>
            </button>
        </div>
    )
}