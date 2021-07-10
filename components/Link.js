import NextLink from 'next/link'

export default function Link({children, href = '#', ...rest}) {
  return (
    <NextLink passHref href={href}>
      <a {...rest}>
        {children}
      </a>
    </NextLink>
  )
}