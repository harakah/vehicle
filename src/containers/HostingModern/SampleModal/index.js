import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import SamplePanelWrapper from './sampleModal.style';

const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

const SampleModal = ({ titleStyle, hintStyle }) => {
  return (
    <SamplePanelWrapper>
      <Heading content="Sample Report" {...titleStyle} />
      <Text content="Vehicle History Report" {...hintStyle} />
      <FileViewer fileType="pdf" filePath="/sample_report.pdf" />
    </SamplePanelWrapper>
  );
};

// SearchPanel style props
SampleModal.propTypes = {
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
};

// SearchPanel default style
SampleModal.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['24px', '30px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'rgba(32, 32, 29, 0.55)',
    letterSpacing: '-0.025em',
    mt: '17px',
    ml: ['15px', '30px'],
    mb: '0',
  },
};

export default SampleModal;
