import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import ReportWrapper from './reportNotFound.styles';
import illustration from 'common/assets/image/hostingModern/car-report.png';
import Image from 'common/components/Image';

const ReportSection = () => {
  return (
    <ReportWrapper>
      <Image src={illustration} alt="Illustration" />
      <Heading as="h3" >Please wait 5 to 10 minutes your report is being generated.</Heading>
      <Text content="Refresh the page in a couple of minutes." />
      <Text content="Please double-check that you entered the correct email address on the website." />
      <Text content="You can check your email for the carfax report." />
      <Heading as="h5" >If you have any questions or problems, please contact live support at the bottom right of the screen.</Heading>
    </ReportWrapper>
  );
};

export default ReportSection;
