import React from 'react'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div className='signup-parent'>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
          <label>First Name
            <input 
              type='text'
              value={this.state.first_name}
              onChange={this.update('first_name')}
            />
          </label>
          <br/>
          <label>Last Name
            <input 
              type='text'
              value={this.state.last_name}
              onChange={this.update('last_name')}
            />
          </label>
          <br/>
          <label>Email Address
            <input 
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <br/>
          <label>Password
            <input 
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br/>
          <input className='sessionSubmit' type='submit' value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SignupForm;