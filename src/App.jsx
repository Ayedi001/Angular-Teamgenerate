import React from "react";
import  './Navbar/App.css'
function App(props) {

  const styles = {
    backgroundColor: props.copy? "white" : "#202020"
    
}

 let x = 10
 if (x===0){
   console.log("true")
 }
 console.log(x)

  return (
    <div className = "hell" style={styles}>
      

    </div>
  );
}

export default App;
