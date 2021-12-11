import styled, { css } from 'styled-components';

const colorOptions = {
  default: {
    text: 'var(--color-white)',
    bg: 'var(--color-primary)',
    hover: 'var(--color-primary-light)',
  },
  danger: {
    text: 'var(--color-white)',
    bg: 'var(--color-danger)',
    hover: 'var(--color-danger-light)',
  },
  gray: {
    text: 'var(--color-light-2)',
    bg: 'var(--color-dark-5)',
    hover: 'var(--color-dark-4)',
  },
  white: {
    text: 'var(--color-primary-light-2)',
    bg: 'var(--color-white)',
    hover: 'var(--color-light-2)',
  },
};

const Button = styled.button`
  border-radius: 2.4rem;
  padding: 1.7rem 2.4rem 1.5rem 2.4rem;

  color: ${({ color }) =>
    color ? colorOptions[color].text : colorOptions.default.text};
  background: ${({ color }) =>
    color ? colorOptions[color].bg : colorOptions.default.bg};

  &:hover {
    background: ${({ color }) =>
      color ? colorOptions[color].hover : colorOptions.default.hover};
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding: 0.8rem 1.6rem 0.8rem 0.8rem;
    `};
`;

export default Button;
