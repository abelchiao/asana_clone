import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email Address
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <br />
          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br />
          <input className='sessionSubmit' type='submit' value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default LoginForm;