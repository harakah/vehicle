import React from 'react';
import Checkbox from 'common/components/Checkbox';
import { useRouter } from 'next/router';
import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import BannerSection, {
  ContentWrapper,
  BannerContent,
  DomainChecker,
  DomainControl,
  BannerImage,
  BackgroundOverlay,
  TextReCaptcha,
  TryVIN
} from './banner.style';
import f02 from 'common/assets/image/hostingModern/f02.png';
import Image from 'common/components/Image';
import { MOTTO } from 'lib/constant';

const Banner = ({ action = '/payment' }) => {
  const preventDefault = f => e => {
    e.preventDefault();
    f(e);
  }
  
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const handleParam = setValue => e => setValue(e);
  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: { vin: query },
    })
  });

  return (
    <BannerSection id="home">
      <BackgroundOverlay />
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" color="white">Trusted History Reports</Heading>
            <Text content={MOTTO} color="white" />
            <DomainChecker>
              <form onSubmit={handleSubmit}>
                <DomainControl>
                  {/* <Heading as="h3" color="#666">Find any vehicle by VIN &#183; <TryVIN >Try Sample VIN</TryVIN> </Heading> */}
                  <Input
                    aria-label="vin-search"
                    iconPosition="left"
                    inputType="text"
                    maxLength="17"
                    minLength="17"
                    onChange={handleParam(setQuery)}
                    placeholder="Enter VIN Number"
                    required
                    value="string"
                  />
                  <br />
                  <Checkbox
                    className="checklist"
                    labelText="Yes, I am the owner of the vehicle"
                  />
                  <Button fullWidth title="Check VIN" type="submit" />
                  <TextReCaptcha>
                    <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"> Privacy Policy</a> and <a href="https://policies.google.com/terms"> Terms of Service</a> apply.</p>
                  </TextReCaptcha>
                  <Image m="0" src={f02} alt="" />
                </DomainControl>
              </form>
            </DomainChecker>
          </BannerContent>
          <BannerImage>
            {/* <Image src={illustration} alt="" /> */}
            {/* <Image src="https://www.carfax.ca/images/Home/carcare_en.svg" alt="" /> */}
          </BannerImage>
        </ContentWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
