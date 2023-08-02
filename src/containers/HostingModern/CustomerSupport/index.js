import React from 'react';
import Icon from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import List from 'common/components/List';
import SectionWrapper, {
  ContentWrapper,
  Figure,
  Content,
  IconList,
} from './customerSupport.style';
import messenger from 'common/assets/image/hostingModern/messenger.png';

const CustomerSupport = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Figure>
            <Image src={messenger} alt="" />
          </Figure>
          <Content>
            <Heading>
              Customer support is our main priority with their hundred percent satisfaction.
            </Heading>
            <Text content={'"The single most important thing is to make people happy. If you are making people happy, as a side effect, they will be happy to open up their wallets and pay you. Derek Sivers", Founder CD Baby'} />

            <IconList>
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Previous/Current State of Title."
              />
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Title Registration dates"
              />
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Title Brands History"
              />
              <List
                className="listItem"
                icon={<Icon icon={checkmarkCircled} size="18" />}
                text="Other Information"
              />
            </IconList>
          </Content>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CustomerSupport;
