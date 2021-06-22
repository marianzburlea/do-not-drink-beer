import styled from 'styled-components'

export const BeerTitle = styled.h1`
  font-size: 28px;
`

export const BeerImageWrapper = styled.div`
  /* 9/16 = 56.25% */
  padding-top: 56.25%;
  position: relative;
  transition: 250ms;

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

export const Beer = styled.div`
  grid-column: span 4;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    /* o groaza de kkt-uri */
    transform: scale(1.1);
  }
`
