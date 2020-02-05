import React from 'react';
import logo from 'logo.png';


function App() {
  return (
    <div style = {style.back}>
        <img src={logo} alt="logo"></img>
        <input type = "Text" style = {style.input} placeholder = "Login"></input>
        <input type = "Text" style = {style.input} placeholder = "Senha"></input>
        <button style = {{fontSize:'30px', borderRadius:'5px',padding:'5px'}}>LOGAR</button>
      
    </div>
  );
}


let style = {input:{

display:'flex',
alignItems: 'center',
textAlign:'center',
margin: '10px',
padding: '5px',
borderRadius:'5px',
fontSize:'15px'

},
back:{
  display:'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#C0C0C0',
  boxSizing: "border box",
  width: '100vw', 
  height: '100vh'
},};
export default App;
