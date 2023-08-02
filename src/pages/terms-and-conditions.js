import React from 'react';
import Head from 'next/head';
import { Html } from 'next/document';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { theme } from 'common/theme/hostingModern';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/HostingModern/hostingModern.style';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/HostingModern/Navbar';
import Footer from 'containers/HostingModern/Footer';
import Container from 'common/components/UI/Container';
import { NAME, EMAIL, URLWEB, COLOR_PRIMARY, CRISPID } from 'lib/constant';

const TNC = () => {
  React.useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISPID;
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{NAME} - Terms and Condition</title>
        <meta name="Description" content="Original and Actual Carfax" />
        <meta name="theme-color" content={COLOR_PRIMARY} />
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bree+Serif|DM+Sans:400,400i,500,500i,700,700i&display=swap"
        />
      </Head>

      <ResetCSS />
      <GlobalStyle />

      <ContentWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </Sticky>
        <Container style={{ padding: 0 }}>
          <div>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '32px', fontFamily: 'Poppins', color: '#333333'}}>Terms and conditions</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>These terms and conditions outline the rules and regulations for the use of {NAME} Website.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use {NAME} website if you do not accept all of the terms and conditions stated on this page.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of Azerbaijan. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Cookies</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We employ the use of cookies. By using {NAME} website you consent to the use of cookies in accordance with {NAME} privacy policy.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>License</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Unless otherwise stated, {NAME} and/or it’s licensors own the intellectual property rights for all material on {NAME}. All intellectual property rights are reserved. You may view and/or print pages from {URLWEB} for your own personal use subject to restrictions set in these terms and conditions.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>You must not:</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Republish material from {URLWEB}</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Sell, rent or sub-license material from {URLWEB}</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Reproduce, duplicate or copy material from {URLWEB}</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Redistribute content from {NAME} (unless content is specifically made for redistribution).</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Hyperlinking to our Content</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>The following organizations may link to our Web site without prior written approval:</span>
                <ul style={{marginBottom: '0in'}} type="circle">
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Government agencies;</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Search engines;</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>News organizations;</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</span></li>
                </ul>
              </li>
            </ul>
            <ol start={2} style={{marginBottom: '0in'}} type={1}>
              <ol start={2} style={{marginBottom: '0in'}} type={1}>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</span></li>
                <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>We may consider and approve in our sole discretion other link requests from the following types of organizations:</span>
                  <ul style={{marginBottom: '0in'}} type="square">
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;</span></li>
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>dot.com community sites;</span></li>
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>associations or other groups representing charities, including charity giving sites,</span></li>
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>online directory distributors;</span></li>
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>internet portals;</span></li>
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>accounting, law and consulting firms whose primary clients are businesses; and</span></li>
                    <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>educational institutions and trade associations.</span></li>
                  </ul>
                </li>
              </ol>
            </ol>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of ; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to&nbsp;</span><u><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#E97D68'}}><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></u><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Approved organizations may hyperlink to our Web site as follows:</span></p>
            <ol start={2} style={{marginBottom: '0in'}} type={1}>
              <ol start={2} style={{marginBottom: '0in'}} type={1}>
                <ul style={{marginBottom: '0in'}} type="square">
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>By use of our corporate name; or</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>By use of the uniform resource locator (Web address) being linked to; or</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.</span></li>
                </ul>
              </ol>
            </ol>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>No use of {NAME} logo or other artwork will be allowed for linking absent a trademark license agreement.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Removal of links from our website</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Disclaimer</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</span></p>
            <ol start={2} style={{marginBottom: '0in'}} type={1}>
              <ol start={2} style={{marginBottom: '0in'}} type={1}>
                <ul style={{marginBottom: '0in'}} type="square">
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>limit or exclude our or your liability for death or personal injury resulting from negligence;</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>limit any of our or your liabilities in any way that is not permitted under applicable law; or</span></li>
                  <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>exclude any of our or your liabilities that may not be excluded under applicable law.</span></li>
                </ul>
              </ol>
            </ol>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
          </div>
        </Container>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};

export default TNC;
