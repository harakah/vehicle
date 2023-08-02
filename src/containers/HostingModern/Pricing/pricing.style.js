import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
  /* background-color: red; */
  padding: 50px 0 50px;
  @media only screen and (max-width: 1440px) {
    padding: 10px 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px 0 60px;
  }
`;

export const ContentWrapper = styled.section`
  /* flex-wrap: wrap; */

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    flex-wrap: initial;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const PriceTable = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  column-count: 1;
  padding: 40px;
  max-width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
    border: 1px solid #e8dfdf;
    border-radius: 10px;
  }
  &.recommended {
    box-shadow: 0px 15px 50px rgba(91, 132, 193, 0.1);
    border-radius: 10px;
    position: relative;
    padding-top: 75px;

    .rec-label {
      background-color: ${themeGet('colors.primary')};
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      min-height: 35px;
      display: flex;
      color: #fff;
      border-radius: 10px 10px 0 0;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 18px;
      font-weight: 700;
    }
    @media only screen and (max-width: 768px) {
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .desc {
    font-size: 16px;
    line-height: 26px;
    color: ${themeGet('colors.text')};
  }
  .start-trial {
    border-radius: 5px;
    margin-top: 21px;
    margin-bottom: 26px;
    &.outlined {
      background-color: #fff;
      border: ${themeGet('colors.tertiary')};
      color: ${themeGet('colors.primary')};
    }
  }
  .listItem {
    color: ${themeGet('colors.text')};
    display: flex;
    font-size: 16px;
    line-height: 26px;
    margin-top: 30px;
    i {
      margin-right: 12px;
    }
    &.disabled {
      color: ${rgba('#343D48', 0.5)};
    }
  }
`;

export const Price = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  line-height: 34px;
  letter-spacing: -0.55px;
  align-items: baseline;
  margin-top: 11px;
  span {
    font-size: 16px;
  }
  .base-price {
    text-decoration: line-through;
  }
`;

export default SectionWrapper;
