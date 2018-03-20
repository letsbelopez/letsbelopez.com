import Link from 'next/link'

const HomeItemDark = () => (
  <section>
    <div>
      <aside>
        <h1>Websites from custom design</h1>
        <h2><Link href='/portfolio'><a>Click</a></Link> to see some projects where I implemented a custom design from scratch.
          </h2>
        <ul className='hidden-mobile'>
        <li><p>We'll talk about your vision for the site</p></li>
        <li><p>Share the design with me and...</p></li>
        <li><p>Your pixel perfect web site is on its way.</p></li>
        </ul>
      </aside>
      <aside className='image-wrapper'>
      <Link href='http://ds-iq.com'>
        <a><img src='/static/dsiq-home.jpg' alt='dsiq home' /></a>
      </Link>
    </aside>
    </div>
    <style jsx>{`
    a {
      color: #067df7;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    img {
      width: 100%;
    }

    section {
      padding: 40px 0;
      background: #fafafa;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: #eaeaea;
    }

    div {
      display: flex;
      justify-content: space-between;
      max-width: 900px
      margin-left: auto;
      margin-right: auto;
      align-items: center;
    }

    h1 {
      font-size: 22px;
      font-weight: normal;
      line-height: 34px;
      text-align: left;
    }

    h2 {
      font-size: 16px;
      font-weight: normal;
      line-height: 26px;
      color: #999;
    }

    li {
      margin-top: 10px;
    }

    p {
      margin: -5px 0 0 0;
    }

    .image-wrapper img {
      width: 350px;
      height: 350px;
    }

    aside:first-child {
      order: 2;
      padding-left: 30px;
    }

    aside:last-child {
      order: 1;
    }

    @media (max-width: 768px) {
      div {
        flex-direction: column;
      }

      aside:first-child {
        padding: 20px;
      }

      h1, h2 {
        text-align: center;
      }

      ul {
        margin: 40px auto 0 auto;
        max-width: 310px;
        padding: 0;
      }
    }
    `}</style>
  </section>
)

export default HomeItemDark