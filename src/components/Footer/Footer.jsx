import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <h3 className='footer-top-heading'><b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr</h3>
            <p className='footer-top-description'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                et justo duo dolores et ea rebum. <b>Stet clita kasd gubergren</b>,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div className='footer-bottom'>
            <div className='footer-left'>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est.
                </p>
                <br /><br /><br /> <br />
            </div>
            <div className="footer-right">
                <h3> <b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr.</h3>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='E-Mail Address'/>
                    <textarea type='description' placeholder='Nachricht' />
                    <label>
                    <input type="checkbox" />
                    Einwilligung zur Datenverarbeitung*
                    </label>
                    <button type='submit'>Jetzt absenden!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer;