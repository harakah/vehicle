import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'DM Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6, button, input, textarea {
    font-family: 'DM Sans', sans-serif;
  }

  section {
    position: relative;
  }

  .reuseModalHolder.sample-modal{
    margin-top: 100px;
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }

  .reuseModalHolder.sample-modal .innerRndComponent{
    overflow-y: auto;
  }
`;

export const ContentWrapper = styled.div`
  .sticky-nav-active header {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
  }
`;
