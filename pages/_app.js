import 'tailwindcss/tailwind.css'
import Header from "../components/Header"

// this component is rendered for all routes
// about.js, index.js, contact.js, …

/**
 * Component: top level component of that page
 * index.js -> default export
 * about.js -> default export
 */
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
