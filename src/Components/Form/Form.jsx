import React, {useRef} from 'react'
import "./Form.css"
import emailjs from "emailjs-com"

function Form() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gat0dvj', 'template_ccbstxw', form.current, 'QDaTvs1JJBekWao0q')

    e.target.reset()
  };

  return (
    <div className='myForm'>
        <div className="Title">
            My Form
        </div>
        <form ref={form} className="ContactsSubChild form" onSubmit={sendEmail}>
            <input className='GuestName formChild' type='text' name='name' placeholder='Your Full name' required />
            <input className='Email formChild' type='email' name='email' placeholder='Your Email' required />
            <textarea className='TextArea formChild' name='massage' placeholder='Your Massage' required />
            <button type='submit' className='submit'>Send Massage</button>
        </form>
    </div>
  )
}

export default Form