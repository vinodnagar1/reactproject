import React, { useState,useEffect } from "react";



const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e){
     
    let validator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setSubmitted(e?.target?.email?.value?.match(validator)?true:false)

  }
 
  
   

  
    

    
      
      
    

          
        
    

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
    method="post"
      
      onSubmit={handleSubmit}
      
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          
          className="nameclass"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          
          className="emailclass"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="messageclass"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="submitclass"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default Contact;