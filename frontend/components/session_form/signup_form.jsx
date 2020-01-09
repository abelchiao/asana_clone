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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { email: 'demo@demo.demo', password: '123456' }
    this.props.login(demoUser);
  }

  navigateToLogin() {
    this.props.history.push('/login');
  };

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
      <div>
        <img className='signup-logo' src={window.logo} />
        {/* <img className='login-logo' src='assets/logo_horizontal_white.png' alt='Asana Logo' /> */}
        <div className='signup-parent'>
          <div className='signup-header'>
            <h1 className='signup-title'>Sign Up</h1>
            <button className='demo-login-button' onClick={this.demoLogin}>Demo Login</button>
            <div className='or-separator'>
              or
            </div>
          </div>
          {this.renderErrors()}
          <form className='signup-form' onSubmit={this.handleSubmit}>
            <br/>
            <div className='signup-input signup-first-name'>
              <label>First Name
                <input 
                  className='signup-input-field'
                  type='text'
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                />
              </label>
            </div>
            <br/>
            <div className='signup-input'>
              <label>Last Name
                <input 
                  className='signup-input-field'
                  type='text'
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                />
              </label>
            </div>
            <br/>
            <div className='signup-input'>
              <label>Email Address
                <input 
                  className='signup-input-field'
                  type='text'
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
            </div>
            <br/>
            <div className='signup-input'>
              <label>Password
                <input 
                  className='signup-input-field'
                  type='password'
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
            </div>
            <br/>
            <input className='signup-button' type='submit' value={this.props.formType} />
          </form>
        </div>
        <div className='signup-login-link'>
          <div>Already have an account?</div>
          <button className='signup-login-button' onClick={this.navigateToLogin}>Log In</button>
        </div>
      </div>
    )
  }
}

export default SignupForm;