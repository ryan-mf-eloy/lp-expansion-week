import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  secondary?: boolean;
  icon?: boolean;
}

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 18px;
  padding: 25px 35px;
  max-width: 380px;
  width: 100%;
  background: #50FA7B;
  color: #1E2124;
  font-weight: bold;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);

  &:hover{
    background: ${shade(0.1, '#50FA7B')};
  }

  ${({ icon }) => 
    icon && css`
      padding: 15px;
      max-width: 70px;
      width: 100%;
      max-height: 70px;
      height: 100%;
    `};

  ${({ secondary }) => 
    secondary && css`
    background: #6C63FF;
    color: #ffffff;
    &:hover{
      background: ${shade(0.1, '#6C63FF')};
    }`};
`;

export default Button;