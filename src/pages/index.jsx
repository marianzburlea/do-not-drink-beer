import Head from 'next/head'
import Image from 'next/image'
import BeerList from '../component/beer-list'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Don&apos;t drink Beer, there&apos;s a better way!</title>
        <meta
          name="description"
          content="Beer can make people talk, and some people talk the truth too much, and some people get upset, don't drink beer!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BeerList />
      </main>
    </div>
  )
}
