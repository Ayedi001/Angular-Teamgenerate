import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Navbar';
import Main from './main'
import Module from './model';


function Aze() {
  const [copy,setcopy] = useState(true)

  function switc() {
    setcopy(!copy)
   
  }
    console.log(window.innerWidth)
    console.log("hello")
   
  return(
    <div>
      <Nav  copy={copy} handleClick={switc}  />
      <App  copy={copy}/>
      <Main copy={copy} />
      <Module />
     
    </div>
  )
}

ReactDOM.render(<Aze />,document.getElementById('root'))

