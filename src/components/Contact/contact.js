import React,{useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_35ha83j', 'template_ovs268n', form.current, {
          publicKey: 'ewtGf3KZdfM4mIRd2',
        })
        .then(
          () => {
            document.getElementById('msg').innerHTML="Successfully submitted!";
            e.target.reset();
            // console.log('SUCCESS!');
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunies</span>
            <br/>
            <span id='msg'></span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' id='name' className='name' placeholder='your full name' name='user_name' required/>
                <input type='email' id='email' className='email' placeholder='your email' name='user_email' required/>
                <textarea className='msg' id='message' name='message' placeholder='your message' rows='5' required></textarea>
                <button type='submit' value='send' className='submitBtn'>submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact