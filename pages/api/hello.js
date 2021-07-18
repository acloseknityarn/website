// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloHandler(req, res) {
  res.statusCode = 200

  const dataToReturn = {
    name: {
      firstname: 'aryamann',
      lastname: 'verma'
    },
    age: 21
  }

  res.json(dataToReturn)
}
  