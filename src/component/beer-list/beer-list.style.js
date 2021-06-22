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

export const BeerButtonGroup = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 500px;
  grid-gap: 1rem;
  padding: 1rem;
  grid-auto-flow: column;
`

export const BeerToFavouriteList = styled.div`
  display: grid;
  max-width: 14rem;
  align-self: start;
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color.dark.background};
  }

  @media screen and (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.color.light.background};
  }
`

export const BeerToFavourite = styled.div`
  border: 2px solid ${({ theme }) => theme.color.dark.primary};
  background-color: ${({ theme }) => theme.color.dark.background};
  color: ${({ theme }) => theme.color.dark.primary};
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  @media screen and (prefers-color-scheme: light) {
    border: 2px solid ${({ theme }) => theme.color.light.primary};
    background-color: ${({ theme }) => theme.color.light.background};
    color: ${({ theme }) => theme.color.light.primary};
  }
`

export const BeerWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto;
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

  @media screen and (min-width: 1080px) {
    --template-columns: 8;
  }

  @media screen and (min-width: 1400px) {
    --template-columns: 12;
  }

  grid-template-columns: repeat(var(--template-columns), 1fr);
`
