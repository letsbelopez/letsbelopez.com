import Layout from "../components/layout"
import Markdown from "react-markdown"

const Now = () => (
  <Layout title="Built Green - David Lopez">
    <Markdown source={`
# Built Green

Built Green is an organization that's a part of the Master Builder's
Association of King and Snohomish Counties.

I was the lead developer on this project and worked alongside two
other developers remotely.

The design was created by Fresh Consulting's design team. To collaborate 
between the design and development team, we shared Sketch files and uploaded 
the project to Invision App. These tools make it easier to track design 
changes and to assist the development team in getting the pixel perfect look 
from the design.

### Sitefinity
This site was built on a multi-site instance of Sitefinity. A cool
features of the site is that we implemented a custom filter on Sitefinity's
List module. Using JavaScript and an ASP.NET API to return the right
HTML for the filter.

The list item's icon also changes depending on what the user selects
as the category for the list content item.

### Lessons Learned
This site makes use of cinemagraphs on the majority of the pages.
Cinemagraphs are video files that are on a constant loop, similar to a
GIF. It can be difficult to display these properly especially cross
browsers and mobile.

In order to work on this project, the development team had to sign
into a virtual machine. The virtual machine was slow and not meant
for development work. We did most of the work on our local machines
and transfered the finished JavaScript and CSS to the virtual machine
to speed up development time as much as possible.

Forcing development out of the developer's machine can lead to increased development time. 
I would try to avoid this in the future.
    `}/>
  </Layout>
)

export default Now