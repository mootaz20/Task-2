import './Contact.css'
import ContactCard from './ContactCard/ContactCard'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="background">
      </div>
      <div className="contact-info">
        <div className="container">
        <div className="heading">
            <p><span>|</span> Contact Us</p>
            <h1>Get In Touch With Our Agents</h1>
        </div>
        <div className="info">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13309.61802294961!2d36.313082558496326!3d33.490851469242784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0dfca654693%3A0x5d94f83addabe185!2z2KfZhNiy2KfZh9ix2KnYjCDYr9mF2LTZgtiMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1716316557415!5m2!1sar!2s" width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='contactCards'>
                  <ContactCard img={'/src/images/phone-icon.png'} title={'010-020-0340'} desc={'Phone Number'} />
                  <ContactCard img={'/src/images/email-icon.png'} title={'info@villa.com'} desc={'Business Email'} />
                </div>
            </div>
            <div className="form">
            <form className="contact-form">
              <div className="input">
                  <label htmlFor="name">Full Name</label>
                  <input type="name" name="name" id="name" placeholder="Your Name..." />
              </div>
              <div className="input">
                  <label htmlFor="email">Email Address</label>
                  <input type="text" name="email" id="email"  placeholder="Your E-mail..." />
              </div>
              <div className="input">
                  <label htmlFor="subject">Subject</label>
                  <input type="subject" name="subject" id="subject" placeholder="Subject..." />
              </div>
              <div className="input">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message"></textarea>
              </div>
                  <button type="submit" className="button">Send Message</button>
          </form>
            </div>
        </div>
        </div>
      </div>  
    </div>
  )
}

export default Contact
