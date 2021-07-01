import React,{useState} from 'react'
import styled from 'styled-components';
import '../App.css';

import grey from '../assets/grey.svg'
import DropDownElement from "./DropDownElement"

export default function DropDown(props) {
  const [rotate, setRotate] = useState(false);
  const [click, setClick] = useState(false);
  const SubContainor = styled.div`


width: 23px;
height: 23px;
margin: 2px 5px 2px 10px;
border-radius: 8px;
text-align: center;
border: ${props.border?"solid 1px #e0e5e9":""};
background-color : ${props.backgroundColor};
padding: 4px;

`;
const Arrow = styled.img`
width: 24px;
height: 24px;
margin: 6px 0 6px 15px;
transform: ${rotate?"rotate(-180deg);": ";"}


`;
const Containor = styled.div`
width: 300px;
height: 40px;
margin: 0 1px 0 0;
padding: 24px 10px 22px 10px;
background-color: ${click?"#f8f9fb":"#fff" };
display: flex;
border-bottom: solid 1px #e0e5e9;
z-index:1;
transition: 0.3s;
&:hover {
  background: #f8f9fb;
}



`;

const Image = styled.img`
display: inline-block;
padding: 10%;
margin: auto;
width: 18px;
height: 18px;
object-fit: contain;


`;

  return (
   <div>
   
    <Containor onClick={()=>{
    props.onClick();
      setClick(!click);
         setRotate(!rotate);}}>
        <SubContainor >
            <Image   src={props.img} alt="icone" />  
        </SubContainor> 
       
        <p className="Prparer-et-co-const" >{props.text}</p>
        <Arrow src={grey}    />
        
    </Containor>
    { click && props.data.map((element) =><DropDownElement id={element.id} text={element.text} /> )}
    </div> 
  );
}

