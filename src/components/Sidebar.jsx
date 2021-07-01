import React,{useState,useEffect} from 'react';

import DropDown from "./DropDown"
import door from '../assets/door.svg'
import duplicate from '../assets/duplicate.svg'
import apps from '../assets/apps.svg'
import app from '../assets/app-store.svg'
import components from '../assets/components.svg'
import parent from '../assets/parent.svg'
import { useHistory } from 'react-router-dom';

export default function SideBar(props) {
    const data=[

      {
        key:1,
        img:door,
        border:true,
        backgroungc:"#fff",
        text:"Présentation de la méthode de conduite du changement",
        path:"Unfound",
        elements:[]
      },
    
      {
        key:3,
        img:app,
        border:false,
        backgroungc:"#c8ecf3",
        text:"Cadrer le besoin en conduite du changement",
        path:"",
        elements:[
          {
            id:1,
            text:"J’identifie un expert"
          },
          {
            id:2,
            text:"J’évalue le dimensionem…"
          },
          {
            id:3,
            text:"J’analyse et je prépare la réunion..."
          },
          {
            id:4,
            text:"Je présente ma réunion de..."
          },
          {
            id:5,
            text:"Je lance la conduite du changement"
          },
          {
            id:6,
            text:"Je prépare la première phase..."
          }
        ]
      },
        {
        key:2,
        img:duplicate,
        border:false,
        backgroungc:"#ffedd3",
        text:"Préparer et co-construire le changement",
        path:"Unfound",

        elements:[]
      },
      {
        key:4,
        img:apps,
        border:false,
        backgroungc:"#ffd5e0",
        text:"Stimuler le changement sur les établissements pilotes",
        path:"Unfound",

        elements:[]
      },
      {
        key:5,
        img:components,
        border:false,
        backgroungc:"#e1e9fa",
        text:"Déployer le changement sur tous les établissements",
        path:"Unfound",

        elements:[]
      },
      {
        key:6,
        img:parent,
        border:false,
        backgroungc:"#e4d0ff",
        text:"Ancrer la transformation auprès des équipes",
        path:"Unfound",

        elements:[]
      }
    ];
    const history = useHistory();
    const [clicked, setClicked] = useState(props.show);
    useEffect(() => { setClicked(props.show); }, [props.show]);
  return (
  
    <div  className="sidenav" style={{display:clicked?"block":"none"}}>
        
         { data.map((element) =>(   <DropDown  img={element.img} backgroundColor={element.backgroungc} border={element.border} text={element.text} onClick={()=>{history.push('/'+element.path)}} data={element.elements}/>
    ) )}
        
        
        
    </div>
  );
}
