const HomeItemCol = () => (
  <section>
    <div>
      <aside>
        <h1>Web Development</h1>
        <p>
          Need work or advice on your website project?
        </p>
        <p>
          I work with the latest web technologies like Angular and ReactJS. I can work solo or with your team.
        </p>
      </aside>
      <aside>
        <h1>Microsoft .NET</h1>
        <p>
          I can support .NET MVC, Web API, Sitefinity CMS and Umbraco projects.
        </p>
        <p>
          I'm a Sitefinity certified developer.
        </p>
      </aside>
      <aside>
        <h1>Single Page Apps (SPA)</h1>
        <p>
          I can build a SPA or an API to connect to it.
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
        display: flex;
        justify-content: space-between;
        max-width: 900px
        margin-left: auto;
        margin-right: auto;
        align-items: start;
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