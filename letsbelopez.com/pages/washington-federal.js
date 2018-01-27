import Layout from "../components/layout"
import Markdown from "react-markdown"

const Now = () => (
  <Layout title="Washington Federal - David Lopez">
    <div className="portfolio">
      <Markdown source={`
# Washington Federal Mortgage Calculator

### Project Goals
Washington Federal wanted to create a sophisticated 
mortgage calculator which would use the
rates that Washington Federal was currently advertising.

I thought this was unique because all of the calculators I found, the user
has to enter their own rates.

There wasn't an easy solution because there are actually 5 different mortgage calculators (Home, Lot, 
Construction, Remodel, Refinance) and together they have over 60 different rates.

The calculator chooses rates based on the inputs that a
user gives it. For example, if the user chooses a 20% downpayment and a loan amount of more than 700k, 
they would recieve the current rate based on those parameters.

### Reactive Calculations
The calculator is reactive to all inputs. This
means that a user can input their expected home purchase price
to see how much the monthly payment would be or go
backwards and input the monthly payment to see what purchase price
they could afford.

This was all done on the same calculator. Other
calculators split these features into different
calculators on different pages of a website. Which is easier to code for but a bad user experience.

### Sitefinity
WashingtonFederal.com is built on top of Sitefinity CMS.
Sitefinity is a .NET software.

In order to update the mortgage rates, someone from
Washington Federal logs into the backend and edits the
rate from there.

### Testing
I used Test Cafe to test the calculations. 
User Interfaces are notorious for being difficult to test. 
Test Cafe is a simple solution with an easy to use API 
to test user interfaces. 

The calculator is the perfect web component to test with Test Cafe 
because we can expect the same values to create the same output. 

An ideal scenario is that on each calculator update, we 
run the tests to make sure no other pieces of the calculator broke.

### Lessons Learned
I built the calculator in plain JavaScript and JQuery. If I were to do it over,
I would do it in ReactJS to componentize each part of the 
calculator. I may also use something like Redux to keep the calculator's state organized.
    `}/>
    </div>
    <style jsx>{`
      div.portfolio {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `}</style>
  </Layout>
)

export default Now