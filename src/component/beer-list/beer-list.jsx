import { useEffect, useState } from 'react'
import * as S from './beer-list.style'
import Beer from '../beer'

const BeerList = () => {
  const [beerList, setBeer] = useState([])

  useEffect(() => {
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=10`
    const getResult = async () => {
      try {
        // load the data from punkapi
        const result = await (await fetch(url)).json()
        console.log(result)
        setBeer(result)
      } catch (error) {
        // show a message with what went wrong
      }
    }

    getResult()
  }, [])
  return (
    <div>
      <S.ResetCss />

      <S.BeerList>
        {beerList.map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </S.BeerList>
    </div>
  )
}

export default BeerList
