import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SamplePanelWrapper = styled.div`
  width: 80%;
  margin: 71px auto;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media only screen and (min-width: 1201px) {
    max-width: 676px;
    width: 100%;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
  }
`;

export default SamplePanelWrapper;
