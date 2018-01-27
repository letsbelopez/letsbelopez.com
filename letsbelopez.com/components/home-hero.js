import Link from 'next/link'

const homeHero = () => (
  <section id='home-hero'>
    <img alt='hero image' src='/static/david-headshot-circle.png' />
    <aside>
    <h1>David Lopez - Full Stack Developer for Hire</h1>
    <p className='intro-text'>
      I build web 
      sites and apps using JavaScript, HTML, CSS and Microsoft .NET. 
      I'd like to help you get your project done.
    </p>
    </aside>
    <Link href='/portfolio'>
      <a>View Portfolio</a>
    </Link>
    <style jsx>{`
      #home-hero {
        background-size: 238px 238px;
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        grid-area: hero;
        padding: 20px 0 60px 0;
      }

      h1 {
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 15px;
      }
      
      img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        box-shadow: 0 6px 14px 0 rgba(0,0,0,0.12);
        margin-bottom: 20px;
      }

      .intro-text {
        max-width: 560px;
        text-align: center;
        font-size: 16px;
        color: #9b9b9b;
        margin-top: 0;
        margin-bottom: 20px;
      }

      a {
        color: white;
        font-weight: 700;
        padding: 15px;
        background-color: black;
        text-decoration: none;
        border: 1px solid transparent
        transition: all 0.2s
        box-shadow: 0 6px 14px 0 rgba(0,0,0,0.12);
      }

      a:hover {
        color: black;
        background-color: white;
        border: 1px solid black
        text-decoration: none;
      }

      @media (max-width: 769px) {
        aside {
          padding: 0 20px;
        }
      }
    `
    }</style>
  </section>
)

export default homeHero