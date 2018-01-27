import Layout from '../components/layout'
import Markdown from "react-markdown"
import ContactForm from '../components/contact-form'

const Portfolio = () => (
  <Layout title="David Lopez - Portfolio">
    <div className='portfolio'>
      <Markdown source={`
## DSIQ
A new design for DSIQ's customer facing website was implemented using Umbraco CMS.
DSIQ wanted a simple .NET based CMS that would give them easy access to edit select 
content from the backend. The website is mobile reponsive. [Visit ds-iq.com](https://ds-iq.com)

![dsiq home](/static/dsiq-home.jpg "DSIQ")

## Built Green
This is a multi site instance of Sitefinity CMS. The website is mobile responsive. 
A unique aspect of Sitefinity is that the content blocks you see on the pages, are 
editable in the backend by just dragging and dropping. This means non-technical users 
can create new pages from the content block templates or easily re-order them. Built Green 
is still under construction.

![built green home](/static/built-green-home.jpg "Built Green")

## Washington Federal
Washington Federal bank just celebrated their 100 year anniversary. 
This is site was built on Sitefinity CMS. [washingtonfederal.com](https://washingtonfederal.com)
  
![washington federal home](/static/wafd-home.jpg "Washington Federal")

      `} />
    </div>
    <ContactForm />
    <style jsx global>{`
      div.portfolio {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 20px;
      }

      h2 {
        text-align: center;
      }

      img {
        width: 100%;
      }
    `}</style>
  </Layout>
)

export default Portfolio