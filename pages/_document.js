import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-[#fbf6ef]">
        <Head />
        <body>
          {/* next.js injects the default export of _app.js here */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument