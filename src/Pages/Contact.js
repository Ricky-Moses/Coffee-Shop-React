import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {


  const socialPlatform = [
    { id: 1, platform: 'Linkedin', url: 'https://www.linkedin.com/in/rickymoses08/', icon: <FaLinkedin />, bgColor: '#0A66C2'  },
    { id: 2, platform: 'Github', url: 'https://github.com/Ricky-Moses', icon: <FaGithub />, bgColor: '#181717'  },
    { id: 3, platform: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=rickymoses08122003@gmail.com', icon: <MdAlternateEmail />, bgColor: '#D14836'  },
    { id: 4, platform: 'Instagram', url: 'https://www.instagram.com/_ricky_moses?igsh=MWdtMThweGt4Ynl6dQ==', icon: <FaSquareInstagram />, bgColor: '#E4405F'  },
    { id: 5, platform: 'Facebook', url: 'https://www.facebook.com/share/1QRp6qvU1b/', icon: <FaFacebook />, bgColor: '#1877F2'  },
  ]

  return (
    <div className='contact-background'>
      <div className="bg-color"></div>
      
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>If you have any questions or need further information, please feel free to reach out to us. We are here to help you!</p>
        <form className="input-fields">
          <input type="text" placeholder='User Name'/>
          <input type="email" placeholder='Email ID'/>
          <input type="number" min='0' max='1000000000' placeholder='Phone Number'/>
          <textarea name="" id="" placeholder='Message Me'></textarea>
          <input type="button" value="Send Me" />
        </form>
        <div class="social-platform">
          {
            socialPlatform.map((item)=>(
              <a key={item.id} href={item.url} rel='noopener noreferrer' target='_blank' style={{backgroundColor: item.bgColor}}>
                {item.icon}
              </a>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Contact