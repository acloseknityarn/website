
      // response is the raw data that we get from server
      // `handleRequestSuccess` automatically gets called
      // when we get data from the server, who calls it?
      // the first `.then` function calls it automatically
      // when data comes, and injects that data in the first
      // argument of this function which is `response` in our case

      // function handleRequestSuccess(response) {
      //   return response.json()
      // }

      // function handleDataWithCorrectFormat(correctedFormatData) {
      //   setDataFromHelloAPI(correctedFormatData)
      // }

      // fetch('/api/hello') // browser -> api 
      //   .then(handleRequestSuccess) 
      //   .then(handleDataWithCorrectFormat)


    /** we will set/update dataFromHelloAPI by using setDataFromHelloAPI */