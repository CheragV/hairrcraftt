import NextLink from "next/link"

export default function Link({ children, to, ...other }) {
  const href = to
  const internal = /^\/(?!\/)/.test(href)

  if (internal) {
    return (
      <NextLink href={href} {...other}>
        {children}
      </NextLink>
    )
  }

  return (
    <a href={href} {...other}>
      {children}
    </a>
  )
}
