import React, { useContext } from "react";
import "./Contact.scss";
import {useSelector} from "react-redux";


function Contact() {
  
  const mode = useSelector(state=>state.darkmode)
  const mouseover = ( ) => {
    document.getElementById("cursor").style.opacity = "0"
  }


  const Name1 = document.querySelector('.fname')
  const Name2 = document.querySelector('.flname')
  const Email = document.querySelector('.email')
  const Message = document.querySelector('.msg')
  const scriptURL = 'https://script.google.com/macros/s/AKfycby24iQXx6FUxuE2BUtHcCqXI9AjuKU6k-ZOJ5f7jYP-rsi9Kuqn6ecSlqjAbFHuDv_X/exec'
  const form = document.forms['curtain-house']//here your form name
  
  
//  form.addEventListener('submit',e =>{
//  e.preventDefault()
//  fetch(scriptURL,{method:'POST',body: new FormData(form)})
//  .then(response=> {
//          setTimeout(()=>{
//              Name1.value= ""
//              Name2.value= ""
//              Email.value= ""
//              Message.value= ""
             
 
//          },2000)
         
//      })
//  .catch((error) => {
     
    
//  }
//  )
//  })


  
  return (
    <div onMouseOver={mouseover} id="contact" className={mode ? "contact darkmode" : "contact"}>
      <div className="contact-box">
        {" "}
        {/* the contact box as cente */}
        <div className="contact-box-titleandmap">
          {/* it for map and title */}
          <div className="contact-box-titleandmap-title">
            <h1>Do You Have Any Questions ?</h1>
          </div>
          <div className="contact-box-titleandmap-map">
            {/* <MyComponent/> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.990376748657!2d75.92686772158078!3d10.925917303267843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b2271cc79311%3A0x46d9311aad9791e1!2sPayyanangadi%2C%20Tirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1627894617831!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="contact-box-form">
          {/* it for from */}
          <form method="POST" name="curtain-house">
            
              <input type="text" name="firstname" className=" fname" placeholder="First Name"/>
              <input type="text" name="lastname" className="lname" placeholder="Last Name"/>
              <input type="email" name="email" className="email" placeholder="Email"/>
            <textarea placeholder="Message" name="message" className="msg" name="" id="" cols="30" rows="10"></textarea>           
            <button type="submit" name="sendbutton" className="btn">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
