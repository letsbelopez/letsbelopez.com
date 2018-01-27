import Link from 'next/link'

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a>David Lopez</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="#contact">
        <a>Contact</a>
      </Link>
    </nav>
    <style jsx>{`
      a {
        padding: 10px;
        font-size: 12px;
        text-transform: uppercase;
        color: #999;
        text-decoration: none;
        transition: color 0.2s ease;
      }

      a:hover {
        color: #000;
      }

      header {
        grid-area: header;
        margin: 0 auto 0 auto;
        padding: 30px 0;
      }
    `}
    </style>
  </header>
)

export default Header