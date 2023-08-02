import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  background: ${themeGet('colors.backgroundHover')};
  padding: 110px 0 30px;
  @media only screen and (max-width: 1440px) {
    padding: 110px 0 30px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 110px 0 30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0 65px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0px 0 70px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.section`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div`
  padding: 100px 0 110px;
  width: 40%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    width: 43%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 48%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.52;
    letter-spacing: -1px;
    @media only screen and (max-width: 1440px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      text-align: center;
      margin-top: 15px;
    }
  }
  p {
    font-size: 15px;
    line-height: 42px;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 32px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 28px;
    }
    @media only screen and (max-width: 768px) {
      line-height: 32px;
      text-align: center;
    }
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    font-size: 15px;
    line-height: 42px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      margin-left: -50px;
      width: 100%;
    }

    i {
      line-height: 1;
      margin-left: 2px;
      transition: 0.3s ease 0s;
    }
    &:hover i {
      margin-left: 7px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 25px;
    }
  }
`;

export const Illustration = styled.figure`
  width: 55%;
  margin: 0 0 0 5%;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
    margin: 0;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const ListGroup = styled.div`
  column-count: 2;
  margin-top: 10px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 25px;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 40px;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 411px) {
    column-count: 1;
  }
  .list-item {
    display: flex;
    align-items: center;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }
    img {
      margin-right: 10px;
    }
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
`;

export const Mark = styled.div`
  display: flex;
`;

export const MarkTitle = styled.div`
  display: block;
`;

export const PreLogo = styled.div`
  margin-bottom: 0;
  margin-right: 14px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 14px;
  margin-bottom: 10px;
  padding: 12px;
  background: #fff;
  border: 1px solid ${themeGet('colors.primary')};
`;

export const ManufactureLogo = styled.div`
  background-image: url("/car-manufacture/${props => props.imageSrc}.png");
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const breatheAnimation = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 16px solid ${themeGet('colors.backgroundHover')};
  border-radius: 50%;
  border-top: 16px solid ${themeGet('colors.primary')};
  width: 120px;
  height: 120px;
  animation: ${breatheAnimation} 2s linear infinite;
`;

export default SectionWrapper;
