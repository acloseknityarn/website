import getAccessToken from '../../lib/fetch-spotify-token'

const SPOTIFY_API_URL= 'https://api.spotify.com/v1/me/player/currently-playing';

/** these headers are to be sent to the spotify currently playing api */
const getCurrentlyPlayingSpotifyRequestHeaders = (token) => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
};

export default async function fetchSpotifyCurrentPlaying(req, res) {
  /** spotify access token */
  const tokenData = await getAccessToken();
  const token = tokenData.access_token

  /** to make spotify currently playing api call, these headers are necessary */
  
  /** headers are basically some data that we can send to or read from API requests 
   * for example, we can read 'User-Agent' header on our api route handler functions
   * (like fetchSpotifyCurrentPlaying) to read which device and browser the user is coming fromm
   * similarly we can also send some custom headers while making API requests ( which is what we are
   * doing here )
  */
  const spotifyCurrentPlayingAPIRequestHeaders = getCurrentlyPlayingSpotifyRequestHeaders(token)

  try {
    // calling spotify currently playing api
     const spotifyCurrentlyPlayingAPIResponse = await fetch(SPOTIFY_API_URL, {
       headers: spotifyCurrentPlayingAPIRequestHeaders
     })

    // we'll detect if there is no currently playing song
     if (spotifyCurrentlyPlayingAPIResponse.status === 204) {
       
       // return the response to the browser
       res.status(spotifyCurrentlyPlayingAPIResponse.status).json({
         message: 'Currently not playing any song'
       })
      // stop the function from executing anymore because we have already returned response from this api route to
      // the browser ( see above )
       return; 
     }

     // spotify api was successful with some data
     if (spotifyCurrentlyPlayingAPIResponse.status === 200) {

        const allCurrentlyPlayingSongData = await spotifyCurrentlyPlayingAPIResponse.json();

        /** if you want to see all data that spotify sends for currently playing song
         * you can uncomment this and comment the res.status statement below this one 
         * temporarily
         */
        // res.status(spotifyCurrentlyPlayingAPIResponse.status).json({
        //   ...allCurrentlyPlayingSongData
        // })

        const artistsInfo = allCurrentlyPlayingSongData?.item?.artists; // array of objects

        // this function gets called by `.map` method automatically
        // `.map` method internally loops over all elements of an array
        // and gives the access of each element to this function
        // whatever is returned from this function for each element
        // becomes a new array of those returned values. In our case
        // string names of artists
        function getArtistsNamesFromArtistsInfo(eachArtistInfo) {
          return eachArtistInfo.name
        }

        const artistsNameArray = artistsInfo.map(getArtistsNamesFromArtistsInfo)      

        res.status(spotifyCurrentlyPlayingAPIResponse.status).json({
          isPlaying: allCurrentlyPlayingSongData?.is_playing,
          songName: allCurrentlyPlayingSongData?.item?.name,
          songLink: allCurrentlyPlayingSongData?.item?.external_urls?.spotify,
          images: allCurrentlyPlayingSongData?.item?.album?.images,
          songArtistsText: getArtistsTextFromArtistsNameArray(artistsNameArray),
          // requestHeaders: req.headers
        })

      return;
     }
  } catch (e) {
    console.log(e);

    res.status(500).json({
      errorMessage: "something went wrong"
    })

    return
  }

  // fail safe handling
  res.status(500).json({
    errorMessage: "something went wrong"
  })
}

function getArtistsTextFromArtistsNameArray(artistsNameArray = []){
  // provide a run time check of the fact that
  // the parameter artistsNameArray should be an array
  // if it is not an array, we should throw an explicit error
  // so that user of the function knows that the function is not
  // being used as it should be

  if (
    ! Array.isArray(artistsNameArray)
  ) {
    throw new TypeError(`'artistsNameArray' argument should be an array but you passed ${typeof artistsNameArray}`)
  }

  let artistsText = "";

  const noOfArtists = artistsNameArray.length
  
  for(let i = 0; i < noOfArtists; i++){
    const isLast = i === artistsNameArray.length - 1

    artistsText = artistsText + artistsNameArray[i];
            

    if (isLast) {
      artistsText = artistsText + "'s"
    } else {
      artistsText = artistsText + "'s "
    }  


    if(!isLast){
      artistsText = artistsText + "and ";
    }
  }

  return artistsText;
}


/**
 * @TODO:
 * read more about reduce method of arrays in javascript and after understanding
 * try to understand this piece of alternative code, which does the same thing
 * as that of the above function
 */

// function alternateGetArtistsTextFromArtistsNameArray(artistsNameArray = []) {
//   if (
//     ! Array.isArray(artistsNameArray)
//   ) {
//     throw new TypeError(`'artistsNameArray' argument should be an array but you passed ${typeof artistsNameArray}`)
//   }

//   const artistText = artistsNameArray.reduce((acc, artistName, index) => {
//     if (index === 0) return acc + artistName + "'s"
//       return acc + ` and ${artistName}'s`
//   }, '')

//   return artistText
// }
