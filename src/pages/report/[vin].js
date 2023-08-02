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
// import Footer from 'containers/HostingModern/Footer';
import Report from 'containers/Report/ReportSection';
import { URLWEB } from 'lib/constant';
import CallToAction from 'containers/HostingModern/CallToAction';
import ReportNotFound from 'containers/Report/ReportNotFound';
import { NAME, COLOR_PRIMARY, CRISPID } from 'lib/constant';

const ReportVIN = ({ data, vin }) => {
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
        <title>{data.success ? vin : `${NAME} - Report` }</title>
        <meta name="Description" content="Original and Actual Carfax" />
        <meta name="theme-color" content={COLOR_PRIMARY} />
        <meta name="viewport" content="" />
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
            <Navbar isPrint={data.success} onPrint={() => window.print()}/>
          </DrawerProvider>
        </Sticky>
        {data.success && <Report data={data} vin={vin} />}
        {!data.success && 
          <>
            <ReportNotFound />
            <CallToAction />
          </>
        }
        {/* <Footer /> */}
      </ContentWrapper>
    </ThemeProvider>
  );
};

export async function getServerSideProps(context) {
  const { vin } = context.query;
  const res = await fetch(`${URLWEB}api/report/${vin}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, vin } }
}

export default ReportVIN;
