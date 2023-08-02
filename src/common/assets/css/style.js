import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ResetCSS = createGlobalStyle`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;
    &.alt {
      background-color: ${themeGet('colors.primary', '#10ac84')} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 5px !important;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;
