import React from 'react';
import logo from './logo.png';


function App() {
  return (
    <div style = {style.back}>
        <input type = "Text" style = {style.input} placeholder = "Login"></input>
        <input type = "Text" style = {style.input} placeholder = "Senha"></input>
      
    </div>
  );
}


let style = {input:{
display:'flex',
textAlign:'center',
margin: '10px',
padding: '5px'
},
back:{

},};
export default App;
