import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.PNG';
import app from '../assets/app-store.svg';

import DropDownText from './DropDownText';
export default function Home(props) {
    
  const Image = styled.img`
  width: auto;
  height: auto;
  position: absolute; 
  display: inline-block; 

  left:0px;
  border-radius:8px;

 
  margin-bottom:155px;



`;
const Icon = styled.img`
display: inline-block;
padding: 19%;
margin: auto;
width: 40px;
height: 40px;
object-fit: contain;


`;
const Header1=styled.h1`

margin: 4px 50px 28px 16px;
font-family: InterUI;
font-size: 28px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.14;
letter-spacing: normal;
color: #17294d;
text-align: left;
margin-left:${props.left}px;
margin-right:${props.right}px;
display: inline-block; 


`;

const Containor= styled.div`

       
      
       width: 64px;
       height: 64px;
       display: inline-block;
       position: relative;
        top:180px;
        left:0px;
        margin-left:-74%;
       border-radius: 15px;
       border: solid 3px #ffffff;
      
       background-color :#c8ecf3;
  `;
  const ImageContainor= styled.div`

  position: absolute;
  max-height:218px;
  max-width:590px;
  min-width:200px;
  text-align: center;
  right:60px;
  margin-left:${props.left}px;
  margin-right:${props.right}px;
  left:0;
  right:0;
  margin-top: 100px;    
  padding: 10px;    
 
  z-index: 199;
  
  `;
  const MyText= styled.p`
  width: 599px;
  height: 110px;
  margin: 20px 71px 80px 156px;
  font-family: InterUI;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #717c87;
  text-align: left;
  margin-left:${props.left}px;
  margin-right:${props.right}px;


`;
  return (
    <div>
        <ImageContainor style={{zIndex:-1}}> 
        <Image src={image}/> <Containor>
          <Icon   src={app} alt="icone" />  </Containor>
      
         
      </ImageContainor>
      <Header1  style={{marginTop:400}} >Cadrer le besoin en conduite du changement</Header1>
      <MyText>La phase 0 est une phase pr??liminaire de la m??thode propos??e qui va permettre d???amorcer une r??flexion sur la conduite du changement dans le projet.
         En tant que chef de projet, j???ai besoin de qualifier, d??valuer, 
         de faire valoir les besoins d???accompagnement au changement relatifs ?? mon projet pour obtenir l???engagement de moyens adapt??s.</MyText>
     <DropDownText id={1} text={"Nous vous proposons de suivre un parcours dans lequel chaque ??tapes est d??crite. Dans chacune d???elle, nous vous pr??conisons d???utiliser un outil en particulier afin de mener ?? bien cette premi??re phase de cadrage.  Vous pourrez ainsi mieux comprendre la vue d???ensemble de cette premi??re grande ??tape." }
       title={"Besoin d???un expert pour vous accompagner ?"} left={props.left} right={props.right}/>
     <DropDownText id={2} text={"Deuxi??mement, j'??value le dimensionnement et la nature de la conduite du changement ?? d??ployer. Pour ce faire, nous avons cr??e une grille de qualification qui vous permettra de d??finir votre degr?? de maturit?? face au changement et vous proposera un plan d'action adequat. Cette ??tape prends la forme d'un questionnaire ?? l'issue duquel vous obtiendrez un rapport visuel et d??taill??. Tout au long de votre d??marche, vous pourrez refaire ce questionnaire afin de mesurer votre ??volution." }
       title={"J?????value le dimensionnement du changement"} left={props.left} right={props.right}/>
    </div>
  );
}
