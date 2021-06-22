import styled from 'styled-components'

export const BeerFooter = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.2rem;
`

export const BeerImage = styled.div`
  /* 9/16 = 56.25% */
  /* padding-top: 56.25%; */
  position: relative;
  transition: 250ms;
  /* grid-row: 1/3; */

  &:before {
    transition: 250ms;
    background-image: url(${({ path }) => path});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover::before {
    /* o groaza de kkt-uri */
    transform: scale(1.2);
  }
`

export const BeerTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`

export const BeerDescriptionContent = styled.div`
  transition: 250ms;
  opacity: ${({ opacity }) => opacity};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const BeerDescription = styled.div`
  font-size: 17px;
  min-height: 180px;
  overflow-y: auto;
  position: relative;
`

export const Beer = styled.div`
  grid-column: span 4;
  transition: 250ms;
  cursor: pointer;
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 2fr;
  grid-gap: 1rem;

  &:hover {
    z-index: 1;
    /* o groaza de kkt-uri */
    transform: scale(1.1);
  }
`

export const BeerInfo = styled.div`
  padding: 0.7rem 1.5rem;
  transition: 250ms;
  cursor: pointer;
  display: grid;
  grid-gap: 1rem;
  background-color: ${({ theme }) => theme.color.dark.secondary};
  border-radius: 1rem;
  grid-template-rows: auto 1fr auto;

  @media screen and (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.color.light.secondary};
  }

  &:hover {
    z-index: 1;
    /* o groaza de kkt-uri */
    transform: scale(1.1);
  }
`
