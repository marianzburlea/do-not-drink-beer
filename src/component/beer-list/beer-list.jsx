import { useEffect, useState } from 'react'
import * as S from './beer-list.style'
import Beer from '../beer'
import Button from '../button'
const per_page = 10

let w = {
  localStorage: {
    getItem: () => '',
    setItem: () => '',
  },
}
if (typeof window !== 'undefined') {
  w = window
}

const BeerList = () => {
  const [beerList, setBeer] = useState([])
  const [page, setPage] = useState(1)
  const [userId, setUserId] = useState(w.localStorage.getItem('userId'))

  console.log(userId)

  useEffect(() => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`

    const getResult = async () => {
      try {
        // load the data from punkapi
        const beerResult = await (await fetch(url)).json()

        const { list } = await (
          await fetch(`/api/favourite?userId=${userId}`)
        ).json()

        if (list) {
          setBeer(
            beerResult.map((beer) => ({
              ...beer,
              isOn: list.includes(beer.id),
            }))
          )
        }
      } catch (error) {
        // show a message with what went wrong
        console.log(error)
      }
    }

    getResult()
  }, [page])

  useEffect(() => {
    if (!userId) {
      // generate an user id
      const newId = ~~(Math.random() * 999999)
      setUserId(newId)
      w.localStorage.setItem('userId', newId)
    }
  }, [])

  const changePage = (e) => {
    const { name } = e.target
    if (name === 'previous' && page > 1) {
      setPage(page - 1)
    } else {
      setPage(page + 1)
    }
  }

  const toggleFavorite = async (userId, beerId) => {
    try {
      await (
        await fetch('/api/favourite', {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            beerId,
          }),
        })
      ).json()

      setBeer(
        beerList.map((beer) => ({
          ...beer,
          isOn: beer.id === beerId ? !beer.isOn : beer.isOn,
        }))
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <S.ResetCss />

      <S.BeerButtonGroup>
        <Button name="previous" onClick={changePage}>
          previous
        </Button>
        <Button name="next" onClick={changePage}>
          next
        </Button>
      </S.BeerButtonGroup>

      <S.BeerWrapper>
        <S.BeerList>
          {beerList.map((beer) => (
            <Beer
              key={beer.id}
              beer={beer}
              userId={userId}
              isOn={beer.isOn}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </S.BeerList>

        <S.BeerToFavouriteList>
          {beerList
            .filter((beer) => beer.isOn)
            .map((beer) => (
              <S.BeerToFavourite key={beer.id}>{beer.name}</S.BeerToFavourite>
            ))}
        </S.BeerToFavouriteList>
      </S.BeerWrapper>
    </div>
  )
}

export default BeerList
