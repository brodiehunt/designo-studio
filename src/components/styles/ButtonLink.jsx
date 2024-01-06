import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ButtonLinkStyles = styled(Link)`
  display: block;
  width: fit-content;
  color: ${({$theme}) => $theme === 'dark' ? 'var(--primary-light)' : 'var(--secondary-dark)'};
  background-color: ${({$theme}) => $theme === 'dark' ? 'var(--primary)' : 'var(--primary-light)'};
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  padding: 1.12rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in all;


  &:hover, &:focus {
    color: var(--primary-light);
    background-color: var(--secondary);
  }
`