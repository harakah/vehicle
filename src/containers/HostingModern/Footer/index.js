import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  // FooterWidget,
  // Nav,
} from './footer.style';
import LogoImage from 'common/assets/image/hostingModern/logo.png';
import { NAME } from 'lib/constant';

// import { footer as data } from 'common/data/HostingModern';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <div style={{ display: 'flex', justifyContent: 'center !important' }}>
                <Image m="20px" src={LogoImage} alt="Logo" />
                <a href="https://www.paypal.com/webapps/mpp/paypal-popup" target="_blank" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;">
                  <img src="https://www.paypalobjects.com/webstatic/mktg/logo/bdg_secured_by_pp_2line.png" alt="Secured by Paypal" style={{ display: 'inline-block', padding: '2px', paddingBottom: '1rem!important', maxWidth: '100%!important' }} />
                  <span style={{ display: 'block !important' }}>
                    <a href="https://www.paypal.com/webapps/mpp/how-paypal-works" target="_blank">
                      How PayPal Works
                    </a>
                  </span>
                </a>
              </div>
              {/* <FooterWidget>
                <Image className="logo" src={autocheck} alt="autocheck" />
                <Image className="logo" src={carfax} alt="carfax" />
                <Image className="logo" src={copart} alt="copart" />
                <Image className="logo" src={nvmtis} alt="nvmtis" />
              </FooterWidget> */}
              <p>
                This site is protected by reCAPTCHA and the Google and <Link rel="noopener noreferrer" target="_blank" href="https://policies.google.com/terms">Terms of service</Link> apply.<br />
                NMVTIS Data is used for Vehicle Auto Vin Check and Car History Reports Copyright © 2022 {NAME}. All rights reserved.<br />
                The use of this Web site constitutes acceptance of the <Link href="/terms-and-conditions">Terms of Conditions</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
              <Text
                className="copyright"
                content={`© 2022 ${NAME}. All rights reserved.`}
              />
            </Fade>
          </CopyrightInfo>
{/* 
          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" >About Us</Heading>
              <Nav>
                {data.aboutUs.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget> */}

          {/* <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4">Our Information</Heading>
              <Nav>
                {data.ourInformation.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget> */}
          
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
