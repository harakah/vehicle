import React from 'react';
import Head from 'next/head';
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
import Banner from 'containers/HostingModern/Banner';
import Feature from 'containers/HostingModern/Feature';
// import Service from 'containers/HostingModern/Service';
import UltimateFeature from 'containers/HostingModern/UltimateFeature';
import CustomerSupport from 'containers/HostingModern/CustomerSupport';
import Pricing from 'containers/HostingModern/Pricing';
import FaqSection from 'containers/Agency/FaqSection';
import CallToAction from 'containers/HostingModern/CallToAction';
import Footer from 'containers/HostingModern/Footer';
import { NAME, MOTTO, COLOR_PRIMARY, CRISPID } from 'lib/constant';

const HostingModern = () => {
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
        <title>{NAME} - Original and Actual Carfax</title>
        <meta name="Description" content={MOTTO} />
        <meta name="theme-color" content={COLOR_PRIMARY} />
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
        <Banner />
        <Feature />
        <UltimateFeature />
        {/* <Service /> */}
        <CustomerSupport />
        <Pricing />
        <FaqSection />
        <CallToAction />
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
};
export default HostingModern;
