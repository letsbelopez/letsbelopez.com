import Link from 'next/link'

const HomeItem = () => (
  <section>
    <div>
      <aside>
        <h1>Working with me</h1>
        <h2>
         Communication and customer service are my primary focus.
        </h2>
        <ul className='hidden-mobile'>
          <li><p>I'll turn your dreams into a beautiful website.</p></li>
          <li><p>Focus on what you do best, let me handle the tech stuff.</p></li>
          <li><p>You'll always be up to date on the latest tech and security.</p></li>
        </ul>
      </aside>
      <aside className='image-wrapper'>
        <Link href='https://washingtonfederal.com/personal-banking/mortgages/loan-calculator'>
          <a className='center'><img src='/static/wafd-mortgage-calculator.png' alt='washington federal' /></a>
        </Link>
        <label>I made this mortgage calculator for Washington Federal Bank</label>
        <ul className='visible-mobile'>
          <li><p>I'll turn your dreams into a beautiful website.</p></li>
          <li><p>Focus on what you do best, let me handle the tech stuff.</p></li>
          <li><p>You'll always be up to date on the latest tech and security.</p></li>
        </ul>
      </aside>
    </div>
    <style jsx>{`
    a {
      color: #067df7;
      text-decoration: none;
      display: inline-block;
    }

    a:hover {
      text-decoration: underline;
    }

    img {
      width: 100%;
    }

    label {
      display: block;
      text-align: center;
      font-style: italic;
      font-size: 12px;
    }

    section {
      padding: 40px 0;
    }

    div {
      display: flex;
      justify-content: space-between;
      max-width: 900px
      margin-left: auto;
      margin-right: auto;
      align-items: center;
    }

    aside:first-child {
      padding-right: 30px
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

    .visible-mobile {
      display: none;
    }

    @media (max-width: 768px) {
      .hidden-mobile {
        display: none;
      }

      .visible-mobile {
        display: block;
      }

      div {
        flex-direction: column;
      }

      h1, h2 {
        text-align: center;
      }

      ul {
        margin: 40px auto 0 auto;
        max-width: 440px;
        padding: 0;
      }

      aside:first-child {
        padding: 20px 20px 0 20px;
      }

      aside.image-wrapper {
        padding: 20px;
        display: flex;
        flex-direction: column;
      }

      .center {
        text-align: center;
      }
    }
    `}</style>
  </section>
)

export default HomeItem