import styled from 'styled-components'

const Favourite = styled.button`
  border: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  transition: 150ms;
  background-color: ${({ theme }) => theme.color.dark.default};
  border-radius: 50%;

  @media screen and (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.color.light.default};
  }

  &:hover {
    transform: scale(1.5);
  }

  &::before {
    content: '${({ on }) =>
      console.log('on', on) || (on ? `\\1F49B` : `\\2661`)}';
  }
`

export default Favourite
