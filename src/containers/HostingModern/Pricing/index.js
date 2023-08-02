import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import SectionHeading from '../SectionHeading';
import SectionWrapper, {
  ContentWrapper,
  PriceTable,
  Price,
} from './pricing.style';
import Link from 'common/components/Link';
import { pricingInfo } from 'common/data/HostingModern';
import { SAMPLE_REPORT } from 'lib/constant';

const Pricing = () => {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeading
          slogan="Get your vehicle history report today!"
          title="Meet our pricing plan that suit you"
        />
        <ContentWrapper>
          {pricingInfo.map((pricing) => (
            <PriceTable
              key={pricing.id}
              className={pricing.isRecommended && 'recommended'}
            >
              <Text
                as="div"
                className="rec-label"
                content={pricing.isRecommended ? pricing.header : ''}
              />
              <Text className="desc" content={pricing.desc} />
              <Price>
                <span className="base-price">${pricing.basePrice}</span> ${pricing.price}/<span>report</span>
              </Price>
              <Link href={`/report/${SAMPLE_REPORT}`} rel="noopener noreferrer" target="_blank">
                <Button
                  className="start-trial outlined"
                  title={pricing.buttonText}
                />
              </Link>
              {/* {pricing.features.map((feature) => (
                <List
                  className={`listItem ${feature.isDisabled && 'disabled'}`}
                  key={feature.id}
                  text={feature.name}
                  icon={
                    <Icon
                      style={{
                        color: feature.isDisabled ? '#CED7E1' : '#E9C46A',
                      }}
                      icon={
                        feature.isDisabled ? closeCircled : checkmarkCircled
                      }
                      size="18"
                    />
                  }
                />
              ))} */}
            </PriceTable>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
