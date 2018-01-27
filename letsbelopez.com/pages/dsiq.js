import Layout from "../components/layout"
import Markdown from "react-markdown"

const Now = () => (
  <Layout title="DSIQ - David Lopez">
    <Markdown source={`
# DSIQ

### Project Goals
DSIQ is a company that processes data to help retailers make 
better marketing, inventory decisions. It's a software as a 
service business and they wanted a website that would take 
there complex value propistion and make it digestible to their
target demographics and be easy to update the website copy and 
content on their end.

Their IT team is used to developing on the .NET stack, so we 
chose Umbraco as a CMS to develop the new site.

### Umbraco
DSIQ wanted a new look for their public facing website. We implemented the
site in Umbraco, which is a simple open source .NET CMS. Umbraco is a great
.NET solution for this website because we were making a website that wasn't
too complex and we wanted it to be easy for the user to update content and not break
the custom website design.

We made use of Umbraco macros to create a slider which a user could add slides
to by just uploading files to a specific folder in Umbraco.

We were also able to only make certain content editable by creating specific page
types in Umbraco.

### Lessons Learned
This was my first site using Umbraco, and I do really like the framework. It's very
simple to get a .NET CMS up and running, and it's flexible enough to create.

When the site launched, we were using a .sdf file to manage all the 
content as the client requested. This was causing Umbraco 
read and write errors in the backend of the CMS. I would prefer to 
use a SQL database as Umbraco suggests.
    `}/>
  </Layout>
)

export default Now