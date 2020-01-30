import React from 'react';
import styled from 'styled-components';

const StyledToggle = styled.div`
  width: 55px;

  input {
    opacity: 0;
    position: absolute;
  }

  input + label {
    position: relative;
    display: inline-block;
    user-select: none;
    height: 30px;
    width: 50px;
    border: 1px solid #e4e4e4;
    border-radius: 60px;
    transition: 0.4s ease;
  }

  input + label::before {
    content: '';
    position: absolute;
    display: block;
    height: 30px;
    width: 51px;
    top: 0;
    left: 0;
    border-radius: 30px;
    transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
  }

  input + label::after {
    content: '';
    position: absolute;
    display: block;
    background: ${({ theme }) => theme.colors.primary};
    height: 28px;
    width: 28px;
    top: 1px;
    left: 0px;
    border-radius: 60px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1),
      0 4px 0px 0 hsla(0, 0%, 0%, 0.04), 0 4px 9px hsla(0, 0%, 0%, 0.13),
      0 3px 3px hsla(0, 0%, 0%, 0.05);
    transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  }

  input:checked + label::before {
    transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.syntaxBg};
  }

  input:checked + label::after {
    left: 24px;
  }
`;

export const Toggle = ({ onChange, checked }) => (
  <StyledToggle>
    <input
      type="checkbox"
      name="toggle"
      id="toggle"
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor="toggle" />
  </StyledToggle>
);
