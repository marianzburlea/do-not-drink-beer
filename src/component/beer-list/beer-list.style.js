import styled, { createGlobalStyle } from 'styled-components'

export const ResetCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #here {
    margin: 0;
    height: 100%;
    color: ${({ theme }) => theme.color.dark.text};
    background-color: ${({ theme }) => theme.color.dark.background};
  }

  @media screen and (prefers-color-scheme: light) {
    html,
    body,
    #here {
      color: ${({ theme }) => theme.color.light.text};
      background-color: ${({ theme }) => theme.color.light.background};
    }
  }
`

export const BeerList = styled.div`
  display: grid;
  grid-gap: 3rem;
  padding: 2rem 2rem;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.color.dark.background};
  --template-columns: 4;

  @media screen and (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.color.light.background};
  }

  @media screen and (min-width: 768px) {
    --template-columns: 8;
  }

  @media screen and (min-width: 1080px) {
    --template-columns: 12;
  }

  @media screen and (min-width: 1400px) {
    --template-columns: 16;
  }

  grid-template-columns: repeat(var(--template-columns), 1fr);
`
