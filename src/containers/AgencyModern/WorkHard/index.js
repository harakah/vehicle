import React from 'react';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import { Icon } from 'react-icons-kit';
import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import List from 'common/components/List';
import Link from 'common/components/Link';
import SectionWrapper, {
  Title,
  Section,
  Content,
  Illustration,
  ListGroup,
  Mark,
  MarkTitle,
  PreLogo,
  ManufactureLogo,
  Loader
} from './workHard.style';
import dataList from 'common/data/AgencyModern';
// import illustration from 'common/assets/image/hostingModern/car-report.png';
import illustration from 'common/assets/image/hostingModern/car-accident-report.png';
import Tick from 'common/assets/image/agencyModern/tick-circle.png';

const WorkHard = ({ data, error, vin }) => {
  
  return (
    <SectionWrapper>
      <Container>
        <Section>
          { 
            // Show Loading
            !data && !error ?
            <Content>
              <Heading as="h3">
                Please wait
              </Heading>
              <Text content="Collecting available data..." m="0" /> 
              <Loader />
            </Content>

            // Show Error
            : (error) ?
            <Content>
              <Heading
                as="h3"
                color="#ff4751"
              >
                Failed!&nbsp;&nbsp;
              </Heading>
              <Heading
                as="h3"
              >
                The provided VIN has errors Please double check the first three characters of the VIN. VINs do not include the letters I (i), O (o), Q (q), U (u) or Z (z), or the number 0. 
              </Heading>
              <Text lineHeight="unset !important" content={vin} /> 
              <Link href="/">
                Check again <Icon icon={chevronRight} />
              </Link>
            </Content>

            // Show Collected Data
            :
            <Content>
              <Title>
                <Heading
                  as="h3"
                  color="#42bf00"
                >
                  Success!&nbsp;&nbsp;
                </Heading>
                <Heading
                  as="h3"
                >
                  We found records for this vehicle:
                </Heading>
              </Title>
              <Mark>
                <PreLogo>
                  <ManufactureLogo imageSrc={data?.mark?.toLowerCase() || ''} />
                </PreLogo>
                <MarkTitle>
                  <Text
                    content={data?.vehicle}
                    lineHeight="unset !important"
                    textAlign="left !important"
                  />
                  <Text lineHeight="unset !important" content={`${data?.records} Record(s)`} textAlign="left !important" /> 
                </MarkTitle>
              </Mark>
              <Text content="Discover all the information about this vehicle in a matter of seconds." textAlign="left !important" />

              <Text content="Vehicle History Report checks for:" textAlign="left !important" />
              <ListGroup>
                {dataList.WorkHardList.map((item) => (
                  <List
                    className="list-item"
                    key={item.id}
                    icon={<Image src={Tick} alt="tick icon" />}
                    text={item.title}
                    textAlign="left !important"
                  />
                ))}
              </ListGroup>
            </Content>
          }
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
