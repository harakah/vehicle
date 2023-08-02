import styled , { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Mail from 'common/assets/image/agencyModern/mail.svg';
import Phone from 'common/assets/image/agencyModern/phone.svg';

const SectionWrapper = styled.section`
  padding: 0px 0 120px;
  @media only screen and (max-width: 1440px) {
    padding: 0 0 90px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 0 90px;
  }
`;

export const ContentWrapper = styled.div`
  display:  ${props => props.hidden ? 'none' : 'flex'};
  flex-direction: row;
  column-count: 2;
  box-shadow: rgb(32 39 49 / 29%) 0px 20px 50px;
  @media only screen and (max-width: 768px) {
    display: grid;
    // width: 100%;
    column-count: 1;
  }
`;

export const LoadingWrapper = styled.div`
  margin: 60px auto;
  padding: 70px 70px;
  // width: 250px;
  display: block;
  text-align: center;
  box-shadow: rgb(32 39 49 / 29%) 0px 20px 50px;
  @media only screen and (max-width: 768px) {
    display: block;
    column-count: 1;
  }
`;

export const InvoiceList = styled.div`
  flex: 0 0 50%;
  background: #f5f6f7;
  padding: 10px 70px;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex: unset;
    padding: 10px 16px;
  }
  .react-reveal {
    flex: 0 0 50%;
    margin-top: 40px;
    @media only screen and (max-width: 768px) {
      flex: 0 0 calc(50% - 25px);
    }
    @media only screen and (max-width: 767px) {
      flex: 0 0 100%;
    }
  }
`;

export const FaqItem = styled.div`
  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: ${themeGet('colors.textPrimary')};
  }
  p {
    font-size: 15px;
    line-height: 32px;
    color: ${themeGet('colors.text')};
  }
  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 42px;
    display: inline-flex;
    align-items: center;
    color: ${themeGet('colors.linkColor')};
    i {
      line-height: 1;
      margin-left: 2px;
      transition: 0.3s ease 0s;
    }
    &:hover i {
      margin-left: 7px;
    }
  }
`;

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
`;

export const Quantity = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .price {
    display: flex;
  }
  .base-price {
    text-decoration: line-through;
  }
`;

export const Secured = styled.div`
  display: flex;
  flex-wrap: nowrap;
  img {
    flex-shrink: 0;
    width: 105px;
    border-style: none;
    height: 28px;
  }
  p {
    color: #666;
    margin: 0 0 0 12px;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    p {
      color: #666;
      margin: 0;
    }
  }
`;

export const Checkout = styled.div`
  padding: 60px;
  width: 100%;
  .button {
    display: block;
    margin: 24px 0;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 24px;
  }
`;

export const EmailInputWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: url(${Mail});
    display: block;
    position: relative;
    width: 22px;
    left: 22px;
    top: 46px;
    z-index: 9;
  }
  input {
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08) !important;
    border: 0 !important;
    margin-bottom: 30px;
    height: 60px;
    padding-left: 60px !important;
    color: #343d48;
    opacity: 1;
    font-weight: 500;
    @media (max-width: 768px) {
    }
    &:focus {
      border: 0;
      box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08);
    }

    &:placeholder {
      font-size: 16px;
      color: #343d48;
      opacity: 1;
    }
  }
  .input-icon {
    left: 10px !important;
    right: auto;
    top: 7px !important;
    height: 46px !important;
    svg {
      color: #ececec;
      width: 24px;
      height: 30px;
    }
  }
`;

export const PhoneInputWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
  &::before {
    content: url(${Phone});
    display: block;
    position: relative;
    width: 22px;
    left: 22px;
    top: 46px;
    z-index: 9;
  }
  input {
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08) !important;
    border: 0 !important;
    height: 60px;
    padding-left: 60px !important;
    color: #343d48;
    opacity: 1;
    font-weight: 500;
    @media (max-width: 768px) {
    }
    &:focus {
      border: 0;
      box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08);
    }

    &:placeholder {
      font-size: 16px;
      color: #343d48;
      opacity: 1;
    }
  }
  .input-icon {
    left: 10px !important;
    right: auto;
    top: 7px !important;
    height: 46px !important;
    svg {
      color: #ececec;
      width: 24px;
      height: 30px;
    }
  }
`;

export const PaypalAccess = styled.div`
  display:  ${props => props.hidden ? 'none' : 'contents'};
`;

export const ButtonPaypal = styled.button`
  background: #ffc4394a;
  display: ${props => props.hidden ? 'none' : 'inline-block'};
  text-align: center;
  height: 55px;
  border-radius: 4px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border: none;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  img {
    margin: 0px 4vw;
    height: 24px;
    position: relative;
    top: 25%;
  }
  @media (max-width: 768px) {
    height: 37px;
    img {
      margin: 0px 4vw;
      height: 19px;
      position: relative;
      top: 25%;
    }
  }
`;

const breatheAnimation = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

const rotateCircle = keyframes`
  0% {
      transform: rotate(-45deg);
  }
  5% {
      transform: rotate(-45deg);
  }
  12% {
      transform: rotate(-405deg);
  }
  100% {
      transform: rotate(-405deg);
  }
`;

const iconLineTip = keyframes`
  0% {
      width: 0;
      left: 1px;
      top: 19px;
  }
  54% {
      width: 0;
      left: 1px;
      top: 19px;
  }
  70% {
      width: 50px;
      left: -8px;
      top: 37px;
  }
  84% {
      width: 17px;
      left: 21px;
      top: 48px;
  }
  100% {
      width: 25px;
      left: 14px;
      top: 45px;
  }
`;

const iconLineLong = keyframes`
  0% {
      width: 0;
      right: 46px;
      top: 54px;
  }
  65% {
      width: 0;
      right: 46px;
      top: 54px;
  }
  84% {
      width: 55px;
      right: 0px;
      top: 35px;
  }
  100% {
      width: 47px;
      right: 8px;
      top: 38px;
  }
`;

export const Loader = styled.div`
  margin: 0 auto;
  border: 16px solid ${themeGet('colors.backgroundHover')};
  border-radius: 50%;
  border-top: 16px solid ${themeGet('colors.primary')};
  width: 120px;
  height: 120px;
  animation: ${breatheAnimation} 2s linear infinite;
`;

export const SuccessCheckmark = styled.div`
  width: 80px;
  height: 115px;
  margin: 0 auto;
  .check-icon {
      width: 80px;
      height: 80px;
      position: relative;
      border-radius: 50%;
      box-sizing: content-box;
      border: 4px solid #4CAF50;
      
      &::before {
          top: 3px;
          left: -2px;
          width: 30px;
          transform-origin: 100% 50%;
          border-radius: 100px 0 0 100px;
      }
      
      &::after {
          top: 0;
          left: 30px;
          width: 60px;
          transform-origin: 0 50%;
          border-radius: 0 100px 100px 0;
          animation: rotate-circle 4.25s ease-in;
      }
      
      &::before, &::after {
          content: '';
          height: 100px;
          position: absolute;
          background: #FFFFFF;
          transform: rotate(-45deg);
      }
      
      .icon-line {
          height: 5px;
          background-color: #4CAF50;
          display: block;
          border-radius: 2px;
          position: absolute;
          z-index: 10;
          
          &.line-tip {
              top: 46px;
              left: 14px;
              width: 25px;
              transform: rotate(45deg);
              animation: icon-line-tip 0.75s;
          }
          
          &.line-long {
              top: 38px;
              right: 8px;
              width: 47px;
              transform: rotate(-45deg);
              animation: icon-line-long 0.75s;
          }
      }
      
      .icon-circle {
          top: -4px;
          left: -4px;
          z-index: 10;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: absolute;
          box-sizing: content-box;
          border: 4px solid rgba(76, 175, 80, .5);
      }
      
      .icon-fix {
          top: 8px;
          width: 5px;
          left: 26px;
          z-index: 1;
          height: 85px;
          position: absolute;
          transform: rotate(-45deg);
          background-color: #FFFFFF;
      }
  }
}
`;

export default SectionWrapper;
