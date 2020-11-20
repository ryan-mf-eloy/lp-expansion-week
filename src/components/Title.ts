import styled, { css } from 'styled-components';

interface TitleProps {
  color?: string;
}

export const H1 = styled.h1<TitleProps>`
  font-size: 64px;
  line-height: 70px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: capitalize;
  ${({ color }) => color && css`color: ${color}`};
  
  u {
    font-weight: bold;
  }
`;

export const H3 = styled.h3<TitleProps>`
  font-size: 36px;
  line-height: 35px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: capitalize;
  ${({ color }) => color && css`color: ${color}`};

  u {
    font-weight: bold;
  }
`;

export const H4 = styled.h4<TitleProps>`
  font-size: 24px;
  line-height: 35px;
  font-weight: 400;
  ${({ color }) => color && css`color: ${color}`};

  u {
    font-weight: bold;
  }
`;