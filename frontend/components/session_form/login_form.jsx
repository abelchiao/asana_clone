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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className='login-parent'>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <h1 className='login-title'>{this.props.formType}</h1>
          {this.renderErrors()}
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