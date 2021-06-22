import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  padding: 0;
  border-radius: 2rem;
  text-transform: capitalize;

  cursor: pointer;
  transition: 250ms;
  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.color.dark.primary};
  color: ${({ theme }) => theme.color.light.text};
  border: 2px solid ${({ theme }) => theme.color.dark.secondary};

  @media screen and (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.color.light.primary};
    color: ${({ theme }) => theme.color.dark.text};
    border: 2px solid ${({ theme }) => theme.color.light.secondary};
  }

  &:hover {
    transform: scale(1.05);
  }
`
