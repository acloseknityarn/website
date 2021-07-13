import Link from "./Link";
import NextLink from 'next/link'
import Image from 'next/image'
import profilePicLogo from '../public/images/profile-pic-logo.jpg'

export default function Header() {
  return (
    <header className="my-0 md:my-4 p-8 flex max-w-4xl mx-auto justify-between md:text-xl">
      {/* Logo */}
      <Link className="w-16 h-16" href="/">
        <Image
          className="rounded-full"
          src={profilePicLogo}
          alt="Aryamann's Logo"
        />
      </Link>

      {/* navigation bar buttons */}
      <nav className="flex space-x-3">
        <Link className="text-gray-500 font-semibold" href="/about">About</Link>
        <Link className="text-gray-500 font-semibold">Projects</Link>
        <Link className="text-gray-500 font-semibold">Blog</Link>
        <Link className="text-gray-500 font-semibold" href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
