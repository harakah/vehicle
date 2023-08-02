import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/hostingModern';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/AgencyModern/agencyModern.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import GuaranteeSection from 'containers/AgencyModern/Guarantee';
import Navbar from 'containers/AgencyModern/Navbar';
import Footer from 'containers/HostingModern/Footer';
import Faq from 'containers/HostingModern/Faq';
import WorkHard from 'containers/AgencyModern/WorkHard';
import { APIURL, NAME, COLOR_PRIMARY, CRISPID } from 'lib/constant';

const fetcher = async url => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

const AgencyModern = () => { 
  const { query, push } = useRouter();
  const { data, error } = useSWR(() => query.vin && `${APIURL}preparation?vin=${query.vin}`,
    fetcher,
    false,
    {
      method: 'GET',
      header: { "Content-Type" : "applicaton/json" }
    }
  );
  React.useEffect(() => {
    // if (!query.vin) {
    //   push({
    //     pathname: '/',
    //     query: { failed: true }
    //   });
    // }

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
      <Fragment>
        <Head>
          <title>{NAME} - Prepare VIN</title>
          <meta name="Description" content="Original and Actual Carfax" />
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
          <WorkHard data={data?.data} error={error} vin={query.vin} />
          {(!error && data?.success) ? <Faq data={data?.data} vin={query.vin}/> : <br /> }
          <GuaranteeSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default AgencyModern;
