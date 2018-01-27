import Header from '../components/header'
import Head from 'next/head'

const PageLayout = (props) => (
  <div className="all-site-wrap">
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />
    <section className="main">
    {props.children}
    </section>
    <style jsx global>{`
      body {
        font-family: -apple-system, 
          BlinkMacSystemFont, 
          "Segoe UI", 
          Helvetica, 
          Arial, 
          sans-serif, 
          "Apple Color Emoji", 
          "Segoe UI Emoji", 
          "Segoe UI Symbol";
        padding: 25px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
      }

      .all-site-wrap {
        display: grid;
        grid-template-columns: 1fr 700px 1fr;
        grid-template-rows: 80px auto auto;
        grid-row-gap: 15px;
        grid-template-areas: 
        "header header header"
        "hero hero hero"
        ". main .";
      }

      .main {
        grid-area: main;
      }

      li > a, p > a {
        color: #067df7;
        text-decoration: none;
      }

      li > a:hover, p > a:hover {
        text-decoration: underline;
      }

      p {
        font-size: 14px;
        line-height: 24px;
      }

      h1 {
        font-weight: 200;
        font-size: 32px;
        text-align: center;
      }

      h3 {
        font-weight: bold;
        font-size: 18px;
      }
    `}</style>
  </div>
)

export default PageLayout