import { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { ResetCSS } from 'assets/css/style';
import Fade from 'react-reveal/Fade';
import Sticky from 'react-stickynode';
import Navbar from '../containers/Navbar';
import { Button, Heading, Text, Image, Rating } from 'components';
// import Banner from '../containers/Banner';
// import Customer from '../containers/Customer';
// import KeyFeatures from '../containers/KeyFeatures';
import AppSlider from '../containers/AppSlider';
// import Features from '../containers/Features';
// import DesignedAndBuilt from '../containers/DesignedAndBuilt';
// import FeatureTab from '../containers/FeatureTab';
// import PricingPolicy from '../containers/PricingPolicy';
// import Testimonial from '../containers/Testimonial';
// import Faq from '../containers/Faq';
// import JoinTrail from '../containers/JoinTrail';
import Footer from 'containers/Footer';
import { GlideCarousel, GlideSlide } from 'components';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/appClassic.style';
import SectionWrapper, { CarouselWrapper } from 'containers/Testimonial/testimonial.style';

export default function () {

  const images = [
    { title: 'Antakya', src: 'https://emrearolat.com/wp-content/uploads/2019/03/home_101_The-Museum-Hotel-Antakya.jpg' },
    { title: 'Antakya', src: 'https://emrearolat.com/wp-content/uploads/2019/03/home_100_The-Museum-Hotel-Antakya.jpg' },
    { title: 'Dalaman', src: 'https://emrearolat.com/wp-content/uploads/2019/03/home_103_Dalaman-International-Airport.jpg' },
    { title: 'Dalaman', src: 'https://emrearolat.com/wp-content/uploads/2019/03/home_104_Dalaman-International-Airport.jpg' },
    { title: 'Ev', src: 'https://emrearolat.com/wp-content/uploads/2019/03/home_103_Kuzu-Effect.jpg' },
    { title: 'Maslak', src: 'https://emrearolat.com/wp-content/uploads/2019/03/home_68_Maslak_No_1_lighting_01.jpg' }
  ]
  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 2,
    animationDuration: 700,
    breakpoints: {
      991: {
        perView: 1,
      },
    },
  };

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
            <CarouselWrapper>
              <Fade up delay={100}>
                <GlideCarousel
                  options={glideOptions}
                  nextButton={
                    <Button
                      icon={<i className="flaticon-next" />}
                      aria-label="Next"
                      variant="fab"
                    />
                  }
                  prevButton={
                    <Button
                      icon={<i className="flaticon-left-arrow" />}
                      aria-label="Prev"
                      variant="fab"
                    />
                  }
                >
                  <Fragment>
                    {images.map((item, index) => (
                      <GlideSlide key={`testimonial--key${index}`}>
                        <Image src={item.src} alt={item.title} />
                      </GlideSlide>
                    ))}
                  </Fragment>
                </GlideCarousel>
              </Fade>
            </CarouselWrapper>

            <AppSlider />
          </ContentWrapper>
          {/* <Footer /> */}
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
}
