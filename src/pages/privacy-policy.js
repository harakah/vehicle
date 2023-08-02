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
import { NAME, URLWEB, EMAIL, COLOR_PRIMARY, CRISPID } from 'lib/constant';

const PP = () => {
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
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '32px', fontFamily: 'Poppins', color: '#333333'}}>Privacy policy</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Effective date: November 30, 2018</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>{NAME} ("us", "we", or "our") operates the {URLWEB} website (the "Service").</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from {URLWEB}</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Information Collection And Use</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We collect several different types of information for various purposes to provide and improve our Service to you.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '18px', fontFamily: '"inherit",serif', color: '#333333'}}>Types of Data Collected</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', fontFamily: '"inherit",serif', color: '#333333'}}>Personal Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Email address</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>First name and last name</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Phone number</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Cookies and Usage Data</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', fontFamily: '"inherit",serif', color: '#333333'}}>Usage Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '16px', fontFamily: '"inherit",serif', color: '#333333'}}>Tracking &amp; Cookies Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Examples of Cookies we use:</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Session Cookies.</span></strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>&nbsp;We use Session Cookies to operate our Service.</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Preference Cookies.</span></strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>&nbsp;We use Preference Cookies to remember your preferences and various settings.</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Security Cookies.</span></strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>&nbsp;We use Security Cookies for security purposes.</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Use of Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>{NAME} uses the collected data for various purposes:</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To provide and maintain the Service</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To notify you about changes to our Service</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To allow you to participate in interactive features of our Service when you choose to do so</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To provide customer care and support</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To provide analysis or valuable information so that we can improve the Service</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To monitor the usage of the Service</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To detect, prevent and address technical issues</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Transfer Of Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>If you are located outside Azerbaijan and choose to provide information to us, please note that we transfer the data, including Personal Data, to Azerbaijan and process it there.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>{NAME} will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Disclosure Of Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '18px', fontFamily: '"inherit",serif', color: '#333333'}}>Legal Requirements</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>{NAME} may disclose your Personal Data in the good faith belief that such action is necessary to:</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To comply with a legal obligation</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To protect and defend the rights or property of {NAME}</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To prevent or investigate possible wrongdoing in connection with the Service</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To protect the personal safety of users of the Service or the public</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>To protect against legal liability</span></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Security Of Data</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Service Providers</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '18px', fontFamily: '"inherit",serif', color: '#333333'}}>Analytics</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We may use third-party Service Providers to monitor and analyze the use of our Service.</span></p>
            <ul style={{marginBottom: '0in', marginTop: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><strong><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>Google Analytics</span></strong></li>
            </ul>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '.5in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy?hl=en"><span style={{color: '#E97D68'}}>https://policies.google.com/privacy?hl=en</span></a></span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Links To Other Sites</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Children's Privacy</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>Our Service does not address anyone under the age of 18 ("Children").</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Changes To This Privacy Policy</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '24px', fontFamily: '"inherit",serif', color: '#333333'}}>Contact Us</span></p>
            <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '18.75pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>If you have any questions about this Privacy Policy, please contact us:</span></p>
            <ul style={{marginBottom: '0in'}} type="disc">
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif', color: '#555555'}}><span style={{fontSize: '14px', fontFamily: 'Poppins'}}>By email:&nbsp;{EMAIL}</span></li>
              <li style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: 'normal', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><span style={{fontSize: '14px', fontFamily: 'Poppins', color: '#555555'}}>By visiting this page on our website: {URLWEB}</span></li>
            </ul>
          </div>
        </Container>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};

export default PP;
