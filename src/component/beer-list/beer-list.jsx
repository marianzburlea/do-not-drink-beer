import { useEffect } from 'react'

const BeerList = () => {
  useEffect(() => {
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=10`
    const getResult = async () => {
      try {
        // load the data from punkapi
        const result = await (await fetch(url)).json()
        console.log(result)
      } catch (error) {
        // show a message with what went wrong
      }
    }

    getResult()
  }, [])
  return <div>Beer List</div>
}

export default BeerList
