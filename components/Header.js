import Link from "./Link";
import NextLink from 'next/link'

export default function Header() {
  return (
    <header className="my-0 md:my-8 p-8 flex max-w-4xl mx-auto justify-between md:text-xl">
      <Link href="/">AV</Link>
      <nav className="flex space-x-3">
        <Link className="text-blue-500" href="/about">About</Link>
        <Link className="text-blue-500">Projects</Link>
        <Link className="text-blue-500">Blog</Link>
        <Link className="text-blue-500" href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
