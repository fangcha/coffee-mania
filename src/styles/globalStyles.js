import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
  }
  body {
    color: ${props => props.theme.black};
    font-size: 1.5rem;
    margin: 0
  }
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
  a:visited {
    color: ${props => props.theme.black};
  }
  ul {
    list-style-type: none;
  }
`

export const theme = {
  black: '#393939',
  red: '#F00',
  grey: '#86888A',
}
