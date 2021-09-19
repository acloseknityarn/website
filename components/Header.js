import Link from "./Link";
import NextLink from 'next/link'
import Image from 'next/image'
import profilePicLogo from '../public/images/profile-pic-logo-3.jpg'

export default function Header() {
  return (
    <header className="my-0 px-6 py-8 md:py-8 flex max-w-4xl mx-auto justify-between md:text-xl">
      {/* Logo */}
      <Link className="w-16 h-16 -ml-2" href="/">
        <Image
          className="rounded-full"
          src={profilePicLogo}
          alt="Aryamann's Logo"
        />
      </Link>

      {/* navigation bar buttons */}
      {/* flex row ( default if none is given )
            vertical  : items-center -> align-items: center
            horizontal: justify-center -> justify-content: center
          flex column
            opposite of the above
      */}
      <nav className="flex space-x-3 items-center">
        {/* <Link className="text-gray-500 font-semibold" href="/">Home</Link> */}
        <Link className="text-gray-500 font-semibold" href="/about">About</Link>
        <Link className="text-gray-500 font-semibold" href="/projects">Projects</Link>
        <Link className="text-gray-500 font-semibold" href="/blog">Blog</Link>
        <Link className="text-gray-500 font-semibold" href="/spotify">Spotify</Link>
      </nav>
    </header>
    
  )
}
