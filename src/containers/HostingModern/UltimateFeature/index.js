import React from 'react';
import PropTypes from 'prop-types';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import SectionWrapper, { FeatureWrapper } from './ultimateFeature.style';
import SectionHeading from '../SectionHeading';
import { features } from 'common/data/HostingModern';
import { NAME } from 'lib/constant';

const UltimateFeature = () => {
  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeading
          mb="20px"
          slogan="Ideal solutions for you"
          title={`Why do used car shoppers choose ${NAME}?`}
        />

        <FeatureWrapper>
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={<img src={feature.icon} alt="ah" />}
              title={<Heading as="h4">{feature.title}</Heading>}
              description={
                <React.Fragment>
                  <Text content={feature.desc} />
                </React.Fragment>
              }
              className="ultimateFeature"
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

UltimateFeature.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

UltimateFeature.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-25px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-25px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
  },
};

export default UltimateFeature;
