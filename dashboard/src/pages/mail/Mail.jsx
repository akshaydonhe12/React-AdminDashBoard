import React from 'react';
import './mail.css';
import emailjs from '@emailjs/browser';

export default function Mail() {

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_grmg3sx","template_dgz4h55",e.target,"FYcYlM5mc_b4uOcY8")
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

  return (
    <div className="mail" onSubmit={sendEmail}>
       <div className="mailTitleContainer">
           <h1 className="mailTitle">Send Mail Here</h1>
           <form className="formBox">
               <lable className="lableName">Name: </lable>
               <input type="text" className="inputArea" name="name"></input>

               <lable className="lableName">Email: </lable>
               <input type="email" className="inputArea" name="user_email"></input>

               <lable className="lableName">Message: </lable>
               <textarea name="message" className="inputArea"row="4"></textarea>
               <input type="submit"className="mailTextarea" value="send"></input>
           </form>
       </div>

    </div>
  )
}

