import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { ResetCSS } from 'assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/Navbar';
import Banner from '../containers/Banner';
import Customer from '../containers/Customer';
import KeyFeatures from '../containers/KeyFeatures';
import AppSlider from '../containers/AppSlider';
import Features from '../containers/Features';
import DesignedAndBuilt from '../containers/DesignedAndBuilt';
import FeatureTab from '../containers/FeatureTab';
import PricingPolicy from '../containers/PricingPolicy';
import Testimonial from '../containers/Testimonial';
import Faq from '../containers/Faq';
import JoinTrail from '../containers/JoinTrail';
import Footer from '../containers/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/appClassic.style';

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>App classic | A next js landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Customer />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
}
