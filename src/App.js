
import './App.css';
import Sidebar from './components/Sidebar'
import React,{useState} from 'react';
import menu from './assets/menu.svg';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Unfound from './components/Unfound';

function App() {

 
  
  const [left, setLeft] = useState(window.innerWidth*0.37);
  const [clicked, setClicked] = useState(true);
  const [blurdiv, setBlur] = useState(false);
  const [right, setRight] = useState(window.innerWidth*0.37);
  function handleLeft(){
    if(window.innerWidth<1100){
      setLeft(window.innerWidth*0.10);
    }else{
      setLeft(window.innerWidth*0.37);
    }
  }
  function handleWidth(){
    if(window.innerWidth>1100){
      setBlur(false);
      setClicked(false);
      
    }
     if(window.innerWidth<1100){
      setBlur(true);
      
    }
  }

  function handleRight(){
    if(window.innerWidth<1100){
      setRight(window.innerWidthidth*0.37);
    }else{
      setRight(window.innerWidth*0.20);
    }
  }
  window.addEventListener('resize', ()=>{ handleWidth(); handleLeft(); handleRight();});
  


  return (
    <Router>
    <div className="app" >
     <div className="topnav" onClick={()=>setClicked(!clicked)} >
      <img src={menu} className="topnav-menu" alt="icon"/>
    </div> 
    <Sidebar show={clicked}/>
    <div style={{filter:(blurdiv&&clicked)?"blur(4px)":"blur(0px)"}} >
    
    <Switch>
          <Route exact path="/">
            <Home left={left} right={right}/>
          </Route>
          <Route path="/Unfound">
            <Unfound left={left} right={right}/>
          </Route>
       
        </Switch>
        
     </div>
     
    </div>
    </Router>
  );
}

export default App;
