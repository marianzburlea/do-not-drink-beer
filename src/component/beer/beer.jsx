import * as S from './beer.style'
import Button from '../button'
import { useState } from 'react'

const Beer = ({ beer }) => {
  const [selected, setSelected] = useState('description')
  const { name, description, brewers_tips, food_pairing } = beer

  const switchTab = (e) => {
    console.log(e.target)
    const { name } = e.target
    setSelected(name)
  }
  console.log(selected)
  return (
    <S.Beer>
      <S.BeerImage path={beer.image_url} />
      <S.BeerInfo>
        <S.BeerTitle>{name}</S.BeerTitle>

        <S.BeerDescription>
          <S.BeerDescriptionContent
            opacity={selected === 'description' ? 1 : 0}
          >
            {description}
          </S.BeerDescriptionContent>

          <S.BeerDescriptionContent
            opacity={selected === 'brewers_tips' ? 1 : 0}
          >
            {brewers_tips}
          </S.BeerDescriptionContent>

          <S.BeerDescriptionContent
            opacity={selected === 'food_pairing' ? 1 : 0}
          >
            {food_pairing.map((p) => (
              <p>{p}</p>
            ))}
          </S.BeerDescriptionContent>
        </S.BeerDescription>

        <S.BeerFooter>
          <Button name="description" onClick={switchTab}>
            description
          </Button>

          <Button name="brewers_tips" onClick={switchTab}>
            brewers tips
          </Button>

          <Button name="food_pairing" onClick={switchTab}>
            food pairing
          </Button>
        </S.BeerFooter>
      </S.BeerInfo>
    </S.Beer>
  )
}

export default Beer
