import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ReportWrapper = styled.section`
  
`;

export const Report = styled.div`
  
`;

export const Loader = styled.div`
  border: 16px solid ${themeGet('colors.backgroundHover')};
  border-radius: 50%;
  border-top: 16px solid ${themeGet('colors.primary')};
  width: 120px;
  height: 120px;
`;

export default ReportWrapper;
