import Header from '../components/header'
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }

  render() {
    return (
      <div className="all-site-wrap">
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>

        <Header />
        <main className="main">
          {this.props.children}
        </main>
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
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        margin: 0;
      }

      .all-site-wrap {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px auto auto;
        grid-row-gap: 0px;
        grid-template-areas: 
        "header"
        "hero"
        "main";
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
  }
}

export default Layout