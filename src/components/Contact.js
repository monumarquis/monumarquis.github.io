import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';
// import contact data
import { contact } from '../data';
import {FaHackerrank,FaLinkedinIn} from"react-icons/fa"
import {BsFacebook ,BsEmojiLaughing , BsGithub , BsEmojiSmile, BsTwitter , BsWhatsapp} from"react-icons/bs"
import {SiGmail , SiLeetcode} from'react-icons/si'

const SERVICE_ID = "service_wls02ki";
const TEMPLATE_ID = "template_xppsbz8"
const USER_ID = "LYp3wwSQwAih6qnsW";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [ formData, setFormData ] = useState({
    email: '', 
    name: '',  
    subject: '', 
    message: ''
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title:'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
           Take a coffee and Have a seat, Talk with me 
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 '
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-fourth rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    {description==="Email" ? 
                  <a href="mailto:monumarquis@gmail.com" target="blank"><p className='text-accent font-normal font-semibold '>{description}: <span className='font-bold text-fourth'>monumarquis@gmail.com</span></p></a>
                  :
                  <p className='text-accent font-normal font-semibold '>{description}</p>  
                  }
                   
                  </div>
              
                </div>
              );
            })}
                <div  className={isActive ? 'circle active' :'circle'} >
                    <div className='toggle animate-bounce' onClick={handleClick}>
                      { isActive ? <BsEmojiLaughing w="100%"/>:<BsEmojiSmile w="100%" />  }
                    </div>

                    <li style={{"--i":0,"--clr":"#1877f2"}}>
                      <a href="https://www.facebook.com/hrithik.singhani/" target="_blank"><BsFacebook /></a>
                    </li>
                    <li style={{"--i":1,"--clr":"#25d366"}}>
                      <a href="https://wa.link/oh9pqy" target="_blank"><BsWhatsapp /></a>
                    </li>
                    <li style={{"--i":2,"--clr":"#1da1f2"}}>
                      <a href="https://twitter.com/MonuMarquis" target="_blank"><BsTwitter /></a>
                    </li>
                    <li style={{"--i":3,"--clr":"#1e293b"}}>
                      <a href="https://github.com/monumarquis" target="_blank"><BsGithub /></a>
                    </li>
                    <li style={{"--i":4,"--clr":"#15803d"}}>
                      <a href="https://www.hackerrank.com/monumarquis" target="_blank"><FaHackerrank /></a>
                    </li>
                    <li style={{"--i":5,"--clr":"#0A66C2"}}>
                      <a href="https://www.linkedin.com/in/monu-yadav-2003m/" target="_blank"><FaLinkedinIn /></a>
                    </li>
                    <li style={{"--i":6,"--clr":"#bd081c"}}>
                      <a href="mailto:monumarquis@gmail.com" target="_blank"><SiGmail /></a>
                    </li>
                    <li style={{"--i":7,"--clr":"#ca8a04"}}>
                      <a href="https://leetcode.com/monumarquis/" target="_blank"><SiLeetcode /></a>
                    </li>
          </div> 
          </div>


          <form
            className='space-y-8 w-full max-w-[780px]'
            onSubmit={handleOnSubmit}
          >
            <div className='flex gap-8'>
              <input name="name" className='input bg-input' type='text' placeholder='Your name' />
              <input name="email" className='input bg-input' type='email' placeholder='Your email' />
            </div>
            <input name="subject" className='input bg-input' type='text' placeholder='Subject' />
            <textarea
              className='textarea bg-input'
              placeholder='Your message'
            ></textarea>
            {/* <button type='submit' className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Send message
            </button> */}
            <button type='submit' className="bg-black relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Send message
            </span>
             <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </button>
          </form>




        </div>
      </div>
    </section>
  );
};

export default Contact;
