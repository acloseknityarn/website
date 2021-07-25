// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCurrentlyPlaying } from '../../lib/spotify.js'

// /api/hello
export default async function helloHandler(request, response) {
  const responseFromAPI = await getCurrentlyPlaying()
  const currentlyPlayingData = await responseFromAPI.json()

  console.log(currentlyPlayingData)
  
  response.statusCode = 200
  // end of processing of request on server ( sending the data back to browser )
  response.json(currentlyPlayingData) 
}
