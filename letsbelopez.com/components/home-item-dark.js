import Link from 'next/link'

const HomeItemDark = () => (
  <section>
    <div>
      <aside>
        <h1>Custom <b>JavaScript</b> for your web site</h1>
        <h2>
          I created Washington Federal's mortgage calculator.
          I think it's one of the best mortgage calculators online.
          <Link href='/washington-federal'><a>Learn why</a></Link>
          </h2>
        <ul className='hidden-mobile'>
          <li><p>Enhance user experience with custom tools</p></li>
          <li><p>I can fix any outstanding bugs on your site.</p></li>
          <li><p>Hiring me ensures that your JavaScript stays working and is easy to maintain</p></li>
        </ul>
      </aside>
      <aside className='image-wrapper'>
        <Link href='https://washingtonfederal.com/personal-banking/mortgages/loan-calculator'>
          <a className='center'><img src='/static/wafd-mortgage-calculator.png' alt='washington federal' /></a>
        </Link>
        <ul className='visible-mobile'>
        <li><p>Enhance user experience with custom tools</p></li>
        <li><p>I can fix any outstanding bugs on your site.</p></li>
        <li><p>Hiring me ensures that your JavaScript stays working and is easy to maintain</p></li>
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

export default HomeItemDark