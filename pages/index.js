import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SocialLinks from '../components/SocialLinks'
import profilePic from '../public/images/portfolio-pic.jpg'

/**
 * whenever the second variable ( which is a function )
 * is called, the whole react component ('Home' function)
 * re renders -> re fires
 */

export default function Home() {
  const [
    spotifyCurrentlyPlayingData,
    setSpotifyCurrentlyPlayingData
  ] = useState(null)

  /**
   * executes whatever you put in it, only once
   */
  useEffect(() => {
    // Promise syntax
    fetch('/api/spotify-currently-playing')
      .then(apiResponse => apiResponse.json()) // data comes from the server here
      .then(fetchedData => { // this happens immediately
        setSpotifyCurrentlyPlayingData(fetchedData)
      })
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 mb-4">
      {/* will talk about this later */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {spotifyCurrentlyPlayingData?.item?.name}
      </div>


      <div className="md:w-3/5 md:mx-auto">
      <section className="mb-8">
        {/* fullName */}
        <h1 className="text-4xl mt-2 lg:mt-0 lg:text-5xl font-bold mb-4 text-gray-600">
          Aryamann Verma
        </h1>

        <h2 className="text-2xl text-gray-500 font-semibold">
          <div>
            Computer Programming
          </div>

          <div>
            Undergrad @ Georgian College
          </div>
        </h2>

        <p className="mt-2 text-xl text-green-500 font-medium">
          Actively looking for co-op / internship opportunities
        </p>
      </section>


      {/* profilePic */}
        <Image
          className="rounded-3xl"
          src={profilePic}
          alt="Aryamann's Photograph"
          priority
          placeholder="blur"
        />
      </div>
     

      {/* SocialLinks */}
      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>

    </div>

  )
}
