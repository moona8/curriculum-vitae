import { render } from "@testing-library/react";
import '../../src/App.css';
import * as ReactBootStrap from "react-bootstrap";



function Info(){
   return(
    <div> 
     
      <ReactBootStrap.Card className="cards " style={{ width: 'rem' }}>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title  className="color" id="About">About Me</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium tempora nesciunt excepturi illo dignissimos incidunt dolorem consectetur optio, expedita, distinctio repellendus, quos nihil? Quae, praesentium volupta
      tibus? Maiores reiciendis non quod.
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a eligendi, consequuntur ab nobis sequi, odit officia voluptas accusantium debitis necessitatibus cum cumque culpa doloremque dignissimos iure autem fugiat amet.
 </ReactBootStrap.Card.Text>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card className="cards " style={{ width: 'rem' }}>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title  className="color" id="Info">Personal Info</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text className="align">
      <p><b>Name:</b> Rukhsana</p>
      <p><b>Email:</b> abc@gamil.com</p>
      <p><b>Phone:</b> 333687887878</p>
      <p><b>Adress:</b> Lorem ipsum dolor, sequi dolorem enim explicabo temporibus dicta, iusto, aut recusandae debitis repudiandae saepe a. Qui, magnam optio.</p>
      
 </ReactBootStrap.Card.Text>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card className="cards " style={{ width: 'rem' }}>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title  className="color" id="Objective">Objective</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium tempora nesciunt excepturi illo dignissimos incidunt dolorem consectetur optio, expedita, distinctio repellendus, quos nihil? Quae, praesentium volupta
      tibus? Maiores reiciendis non quod.
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a eligendi, consequuntur ab nobis sequi, odit officia voluptas accusantium debitis necessitatibus cum cumque culpa doloremque dignissimos iure autem fugiat amet.
 </ReactBootStrap.Card.Text>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card className="cards " style={{ width: 'rem' }}>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title  className="color" id="Education">Education</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text  className="align">
      <p><b>Matric:</b> (Grade"A") Smart School</p>
      <p><b>Intermmediate:</b> (Grade"A") abc@gamil.com</p>
      <p><b>Graduation:</b>(First DIvision) P.E.C.H.S College</p>
      <p><b>Masters:</b> Karachi University </p>
 </ReactBootStrap.Card.Text>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card className="cards " style={{ width: 'rem' }}>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title  className="color" id="Experience">Work Experience</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text  className="align">
      <p><b>Bank Al-Habbib:</b> </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium officiis quibusdam sint dolorem eum exercitationem sed, debitis velit dolor, qui excepturi. Illo fuga exercitationem blanditiis atque sint dolorem quasi?</p>
      <p><b>City School:</b> </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium officiis quibusdam sint dolorem eum exercitationem sed, debitis velit dolor, qui excepturi. Illo fuga exercitationem blanditiis atque sint dolorem quasi?</p>
      
    
 </ReactBootStrap.Card.Text>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card className="cards " style={{ width: 'rem' }}>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title className="color" id="Experties">Experties</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text  className="align">
    <p>HTML</p>
    <p>CSS</p>
    <p>Java Script</p>
    <p>React Js</p>
    <p>React Native</p>
 </ReactBootStrap.Card.Text>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
      
  </div>
   )
}
export default Info;