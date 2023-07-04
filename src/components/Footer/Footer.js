import React from 'react';
import {
  FooterContainer,
  SocialLogo,
  WebsiteRights,
} from './Footer.elements';
import logo from './logo_fork_trans.png'; // adjust the path to your actual image location

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
          <SocialLogo to='/'>
          <div style={{
      width: '50px', 
      height: '50px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <img 
        src={logo} 
        alt="Logo"
        style={{
          width: '100px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} 
      />
    </div>
            EatifyDash
          </SocialLogo>
          <WebsiteRights>Copyright @ {date.getFullYear()} EatifyDash, llc </WebsiteRights>
    </FooterContainer>
  );
}

export default Footer;