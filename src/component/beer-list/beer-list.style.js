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
    background-color: ${({ theme }) => theme.color.dark.background};
  }

  @media screen and (prefers-color-scheme: light) {
    html,
    body,
    #here {
      background-color: ${({ theme }) => theme.color.light.background};
    }
  }
`

export const BeerList = styled.div`
  border: 1px solid ${({ theme }) => theme.color.light.primary};
  border-radius: 1rem;
  display: grid;
  --template-columns: 4;
  grid-gap: 1rem;
  margin: 1rem 2rem;
  padding: 1rem 2rem;

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
