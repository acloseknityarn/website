import { useState, useEffect } from 'react'
import Link from "../components/Link";

export default function Spotify(){
  const [
    spotifyCurrentlyPlayingData,
    setSpotifyCurrentlyPlayingData
  ] = useState(null)

  /**
   * executes whatever you put in it, only once
   */
  useEffect(() => {
    // Promise syntax
    fetch('/api/spotify')
      .then(apiResponse => {
        if (apiResponse.status === 200) {
          return apiResponse.json()
        }

        return null;
      }) // data comes from the server here
      .then(fetchedData => { // this happens immediately
        if (fetchedData) {
          setSpotifyCurrentlyPlayingData(fetchedData)
        }
      })
      .catch(error => {
        // server is not able to give any kind of response at all
        console.log('api called failed because this error happeened: ', error)
      })
  }, [])

  let message = ''
  let songName = spotifyCurrentlyPlayingData?.songName;
  let artistName = spotifyCurrentlyPlayingData?.songArtistsText;
  let songLink = spotifyCurrentlyPlayingData?.songLink;
  let image = spotifyCurrentlyPlayingData?.images[0]?.url;

  if (spotifyCurrentlyPlayingData?.isPlaying) {
    message = 'Currently Playing'
  }
  if (
    !spotifyCurrentlyPlayingData?.isPlaying
    && spotifyCurrentlyPlayingData?.songName
  ) {
    message = 'Was playing a while back'
  } 
  if (
    !spotifyCurrentlyPlayingData?.isPlaying
    && !spotifyCurrentlyPlayingData?.songName
  ){
    message = 'Not Currently Playing'
  }

  const songJSX = (
    <Link href={songLink} openInNewTab>
      <div className="hover:shadow-2xl px-10 pt-5 pb-5">
        <div className="flex pt-10 pb-5">
          {/* Change native img tag to Image component imported from next.js */}
          <img className = "" src={image} height="500" width="500" />
        </div>
        <div>{artistName}</div>
        
        {/* mobile */}
        <Link href={songLink} className="text-2xl lg:hidden" openInNewTab>
          <div className="font-bold underline">{songName}</div>
        </Link>

        {/* desktop */}
        <div className="font-bold text-2xl hidden lg:block">{songName}</div>
      </div>
    </Link>
  )

  return (
  //   <div>{spotifyCurrentlyPlayingData?.songName ? (<div className="flex place-content-center bg-gray-800 py-5">
  //     <section>
  //       <div className="text-white text-3xl underline">{message}</div>
  //       <div className="flex pt-10 pb-5"><img className = "" src={image} height="500" width="500" /></div>
  //       <div className="text-white font-bold text-2xl">{songName}</div>
  //       <div className="text-white">{artistName}</div>
  //     </section>
  //   </div>): (message)}
  // </div>

    <div>
      <div className="flex place-content-center px-5 py-5">
        <section>
          <div className="text-gray-600 text-3xl font-bold">{message}</div>
          <div className="text-gray-600">
            {
              spotifyCurrentlyPlayingData?.songName && songJSX
            }
          </div>
          
        </section>
      </div>
    </div>
    )
}

/**
 * Next.js functionalities that we are using
 * Next.js internally ( SSR, pre rendering ) + api server
 * spotify api -> morning
 * 
 * resume ready (12 noon tomorrow PST)
 * 
 * React ( jsx ) vs JS: https://arihantverma.com/posts/2021/07/17/react-ui-state-model-vs-vanilla-js/
 */