'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.white};
  }
  
  button {
    border: none;
    background-color: inherit;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
`;
