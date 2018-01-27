import Link from 'next/link'
import axios from 'axios'

const contactAPI = process.env.NODE_ENV === 'production' ? 'https://contact-exlubnzusk.now.sh/contact'
  : 'http://localhost:8000/contact'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        name: '',
        email: '',
        message: '' 
      },
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ message: {...this.state.message, [name]: value}})
    this.setState({submitted: false})
  }

  async handleSubmit() {
    axios.post(contactAPI, this.state.message)
      .then((response) => {
        console.log(response)
        this.setState({
          message: {
            name: '',
            email: '',
            message: '' 
          },
          submitted: true
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const isSubmitted = this.state.submitted
    let formGreeting = null
    let buttonText = null

    if (isSubmitted) {
      formGreeting = <h2>Thank You! Talk soon.</h2>
      buttonText = 'Sent'
    } else {
      formGreeting = <h2>Contact Me</h2>
      buttonText = 'Submit'
    }

    return (
      <section id='contact'>
        <div className='form-wrap'>
          {formGreeting}
          <form id='contact-form'>
            <div className='field'>
              <label htmlFor='name'>Name</label>
              <input id='name' 
                type='text' 
                name='name' 
                value={this.state.message.name} 
                onChange={this.handleInputChange} />
            </div>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input id='email' 
                type='email' 
                name='email' 
                value={this.state.message.email} 
                onChange={this.handleInputChange} />
            </div>
            <div className='field message'>
              <label htmlFor='message'>Message</label>
              <textarea type='submit' 
                value={this.state.message.message} 
                id='message' 
                name='message' 
                rows='10' 
                onChange={this.handleInputChange}>
              </textarea>
            </div>
            <div>
              <button disabled={!this.state.message.email || !this.state.message.name || !this.state.message.message}
                type='button' 
                onClick={this.handleSubmit}>
                {buttonText}
              </button>
            </div>
          </form>
        </div>
        <style jsx>{`
          a {
            color: #067df7;
            text-decoration: none;
          }
    
          a:hover {
            text-decoration: underline;
          }
    
          section {
            padding: 40px 0;
          }
    
          section > div {
            display: flex;
            justify-content: center;
            max-width: 900px
            margin-left: auto;
            margin-right: auto;
            align-items: center;
            flex-direction: column;
          }
    
          .field {
            display: inline-block;
            text-align: left;
            margin-bottom: 10px;
            border-bottom: 1px solid rgb(216, 216, 216);
          }
    
          textarea {
            display: block;
            width: 250px;
            outline: none;
            border: none;
            background: transparent;
          }
    
          .field > input {
            outline: none;
            border: none;
            background: transparent;
            width: 200px;
            height: 35px;
          }
    
          form {
            width: 260px;
          }
    
          label {
            width: 50px;
            display: inline-block;
            font-size: 12px;
            font-weight: bold;
            margin-right: 2px;
          }
    
          button {
            width: 100%
            border: 1px solid transparent;
            background-color: black;
            color: white;
            padding: 15px;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.2s;
          }
    
          button:hover {
            color: black;
            background-color: white;
            border: 1px solid black;
            cursor: pointer;
          }

          button[disabled] {
            background-color: rgba(155, 155, 155, 0.7);
          }

          button:hover[disabled] {
            color: white;
            cursor: auto;
            border: 1px solid transparent;
          }
        `}</style>
      </section>
    )
  }
}

export default ContactForm