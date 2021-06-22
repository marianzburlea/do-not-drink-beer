import * as S from './beer.style'

const Beer = ({ beer }) => {
  const { name } = beer

  return (
    <S.Beer>
      <S.BeerImageWrapper path={beer.image_url} />
      <div>Beer name: {name}</div>
    </S.Beer>
  )
}

export default Beer
