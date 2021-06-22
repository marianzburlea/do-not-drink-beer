import { useEffect, useState } from 'react'
import * as S from './beer-list.style'
import Beer from '../beer'
import Button from '../button'
const per_page = 10

const BeerList = () => {
  const [beerList, setBeer] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`
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
  }, [page])

  const changePage = (e) => {
    const { name } = e.target
    if (name === 'previous' && page > 1) {
      setPage(page - 1)
    } else {
      setPage(page + 1)
    }
  }

  return (
    <div>
      <S.ResetCss />

      <div>
        <Button name="previous" onClick={changePage}>
          previous
        </Button>
        <Button name="next" onClick={changePage}>
          next
        </Button>
      </div>

      <S.BeerList>
        {beerList.map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </S.BeerList>
    </div>
  )
}

export default BeerList
