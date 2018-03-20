import Link from 'next/link'

const HomeItemCol = () => (
  <section>
    <div>
      <aside>
        <h1>Technology</h1>
        <p>
          I've never encountered a problem I couldn't solve.
        </p>
        <p>
          <Link href='/tech'><a>Click</a></Link> to see tech I've worked with.
        </p>
      </aside>
    </div>
    <style jsx>{`
      section {
        padding: 40px 0;
        background: #fafafa;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: #eaeaea;
      }

      div {
        text-align: center;
      }

      h1 {
        font-size: 22px;
        font-weight: normal;
        line-height: 34px;
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
        margin-top 18px: ;
      }

      div > * {
        flex: 1;
        padding: 0 15px;
      }

      @media (max-width: 769px) {
        div {
          flex-direction: column;
          align-items: center;
        }

        aside {
          padding: 0 20px;
          max-width: 350px;
        }

        h1, h2, p {
          text-align: center;
        }
      }

    `}</style>
  </section>
)

export default HomeItemCol