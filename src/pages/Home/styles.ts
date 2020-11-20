import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 100px;
  justify-content: center;

  img {
    max-width: 200px;
  }
`;

export const Introduction = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 90px auto 150px auto !important;

  img {
    margin-right: 220px;
    flex: 1;
  }

  div{
    max-width: 580px;
    width: 100%;

    p {
      color: #A8A8B3;
      padding: 15px 0 5px 0;
    }

    strong{
      color: #A8A8B3;
      margin-bottom: 20px;
      display: block;
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 1700px){
    img {
      margin-right: 170px;
      max-width: 600px;
    }

    h1 {
      font-size: 56px;
      line-height: 55px;
    }
  }

  @media only screen and (max-width: 1430px){
    margin: 70px auto 120px auto !important;

    img {
      margin-right: 120px;
      max-width: 540px;
    }

    div {
      p {
        padding: 5px 0 5px 0;
        font-size: 16px;
      }

      strong{
        font-size: 16px;
      }
    }

    div button {
      padding: 20px;
      max-width: 340px;
    }

    h1 {
      font-size: 46px;
    }
  }

  @media only screen and (max-width: 1330px){
    flex-direction: column;
    margin: 70px 0 70px 0 !important;

    img {
      margin: 0 0 50px 0;
      max-width: 740px;
    }

    div{
      max-width: 740px;
    }
  }
`;

export const AccurentMarket = styled.section`
  margin: 180px 0;
  background: #282B30;
  padding: 77px 0;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 100px rgba(0, 0, 0, 0.5);

  div.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  div.container div {
    max-width: 668px;
    width: 100%;
    margin-right: 360px;

    p {
      color: #A8A8B3;
      margin-bottom: 30px;
    }
  }

  img {
    max-width: 570px;
  }

  @media only screen and (max-width: 1700px){
    img {
      max-width: 470px;
    }
  }

  @media only screen and (max-width: 1580px){
    img {
      max-width: 370px;
    }
  }

  @media only screen and (max-width: 1430px){
    margin: 110px 0;

    h3 {
      font-size: 28px;
      line-height: 25px;
    }

    img {
      max-width: 300px;
    }

    button {
      height: 50px;
      width: 60px;
    }

    div.container div {
      max-width: 668px;
      margin-right: 280px;

      p {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1330px){
    flex-direction: column;
    margin: 70px 0 70px 0 !important;

    img {
      margin: 0 auto 50px auto;
      max-width: 500px;
    }

    div.container div{
      max-width: 740px;
      margin: 0 auto 50px auto;
    }

    div.container {
      flex-direction: column;
    }
  }
`;

export const Questions = styled.section`
  div.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    + div.container {
      margin-top: 100px;
    }
  }

  div.container div.text-content{
    max-width: 652px;
    width: 100%;
    flex-direction: row;
    align-items: center;

    &:first-child{
      margin-left: 110px;
    }
    &:last-child{
      margin-left: 147px;
    }

    p {
      color: #A8A8B3;
    }
  }

  div.container img:first-child {
    max-width: 817px;
  }
  div.container img:last-child {
    max-width: 780px;
  }

  @media only screen and (max-width: 1700px){
    div.container img:first-child {
      max-width: 717px;
    }
    div.container img:last-child {
      max-width: 680px;
    }
  }

  @media only screen and (max-width: 1580px){
    div.container img:first-child {
      max-width: 617px;
    }
    div.container img:last-child {
      max-width: 580px;
    }
  }

  @media only screen and (max-width: 1430px){
    h3 {
      font-size: 28px;
      line-height: 25px;
    }

    div.container img:first-child {
      max-width: 417px;
    }
    div.container img:last-child {
      max-width: 380px;
    }
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1330px){
    div.container {
      flex-direction: column;
    }
    div.container img:first-child {
      max-width: 317px;
    }
    div.container img:last-child {
      max-width: 280px;
    }
  }
`;

export const Gradient = styled.section`
  padding: 70px ;
  background: linear-gradient(102.39deg, #50FA7B 0%, #6C63FF 100%);
  box-shadow: 0px 8px 100px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;

  h3 {
    color: #000000;
    text-transform: uppercase;
    display: block;
  }
  
  div.content{
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 480px;
      width: 100%;
    }

    p {
      color: #000000;
      font-weight: 500;
      max-width: 652px;
      width: 100%;
      margin-left: 50px;

      + p {
        margin-top: 40px;
      }
    }
  }

  @media only screen and (max-width: 1430px){
    h3 {
      font-size: 28px;
      line-height: 25px;
    }

    div.content {
      img {
        max-width: 400px;
      }
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Brands = styled.div`
  margin: 40px 0 20px 0;

  div.container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    img {
      max-width: 200px;
    }
  }
`;

export const Footer = styled.section`
  background: #282B30;

  div.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 40px 0;

    ul {
      display: flex;
      flex-direction: row;

      li a {
        flex: 1;
        color: #A8A8B3;;
        text-decoration: none;
        font-size: 18px;
        margin-left: 20px;
        font-weight: 500;

        &:hover{
          color: #ffffff;
        }
      }
    }

    div.brand {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        max-width: 200px;
        margin: 0 auto;
      }

      span{
        color: #A8A8B3;
        text-transform: uppercase;
        margin-top: 10px;
        font-weight: 500;
      }
    }

    div.profile {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        border-radius: 50%;
        margin-right: 5px;
        max-width: 50px;
        height: 50px;
      }

      span a {
        color: #ffffff;
        margin-left: 5px;

        &:hover{
          color: #50FA7B;
        }
      }
    }
  }

  @media only screen and (max-width: 1580px){
    padding: 0 50px
  }
`;