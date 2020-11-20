import styled from 'styled-components';

export const Title = styled.div`
  padding: 60px 0;

  h1 {
    font-weight: bold;
  }

  h4 {
    max-width: 520px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1630px){
    padding: 60px 30px;
  }
`;

export const Img = styled.img`
  max-width: 635px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1230px){
    padding:30px;
  }
`;