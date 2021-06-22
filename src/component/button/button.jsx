import * as S from './button.style'

const Button = ({ children, onClick, name }) => {
  return (
    <S.Button name={name} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
