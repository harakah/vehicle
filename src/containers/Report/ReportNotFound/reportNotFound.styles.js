import styled from 'styled-components';

const ReportWrapper = styled.section`
  text-align: center;
  margin: 10px 100px;
  img {
    max-width: 500px;
    margin: auto;
  }
  @media (max-width: 768px) {
    margin: 10px 50px;
    text-align: left;
    img {
      max-width: 100%;
    }
  }
`;

export default ReportWrapper;
