import React from 'react';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Link from 'common/components/Link';
import illustration from 'common/assets/image/hostingModern/illustration3.png';
import illustration2 from 'common/assets/image/hostingModern/illustration4.png';
import SectionWrapper, { Content, ButtonWrap } from './callToAction.style';
import { EMAIL } from 'lib/constant';

const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <Heading
            as="h3"
          >
            Lost your order?
          </Heading>
          <ButtonWrap>
            <img src={illustration} alt="" />
            <Link href={`mailto:${EMAIL}`}><Button title="CONTACT US NOW" /></Link>
            <img src={illustration2} alt="" />
          </ButtonWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
