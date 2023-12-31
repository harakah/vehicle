import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const FooterWrapper = styled.footer`
  background-color: #ffffff;
  padding: 160px 0 75px;
  position: relative;
  @media only screen and (max-width: 1440px) {
    padding: 160px 0 55px;
  }
  @media only screen and (max-width: 768px) {
    padding: 160px 0 20px;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
  .react-reveal {
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
    }
    @media screen and (max-width: 360px) {
      width: 100%;
    }
  }
`;

export const CopyrightInfo = styled.div`
  margin: auto;
  text-align: center;
  color: #979494;
  @media only screen and (max-width: 768px) {
    margin: auto;
    text-align: left;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    margin-top: 24px;
    a {
      color: ${themeGet('colors.textPrimary')};
    }
  }
  .copyright {
    color: ${rgba('#0f2137', 0.6)};
    margin-top: 20px;
  }
`;

export const FooterWidget = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: center;
  .logo {
    height: 35px;
  }
  @media only screen and (max-width: 768px) {
    width: 33%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const Nav = styled.nav`
  a {
    color: ${rgba('#02073E', 0.8)};
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 2.5;
    transition: 0.3s ease 0s;
    img {
      margin-right: 12px;
    }
    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`;

export default FooterWrapper;
