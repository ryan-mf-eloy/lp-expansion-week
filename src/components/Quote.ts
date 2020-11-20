import styled from 'styled-components';

const Quote = styled.blockquote`
  max-width: 780px;
  margin: 0 auto;
  line-height: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  
  span {
    font-weight: bold;
    margin-top:20px;
    text-transform: uppercase;
    color: #A8A8B3;
    font-style: normal;
  }

  @media only screen and (max-width: 1430px){
    font-size: 16px;
  }

  @media only screen and (max-width: 800px){
    padding: 0 30px;
  }
`;

export default Quote;