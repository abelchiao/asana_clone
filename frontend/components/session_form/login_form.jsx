import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.navigateToSignup = this.navigateToSignup.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {email: 'demo@demo.demo', password: '123456'}
    this.props.processForm(demoUser);
  }

  navigateToSignup() {
    this.props.history.push('/signup');
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
        <img className='login-logo' src={window.logo} />
        {/* <img className='login-logo' src='assets/logo_horizontal_white.png' alt='Asana Logo' /> */}
        <div className='login-parent'>
          <div className='login-header'>
            <h1 className='login-title'>{this.props.formType}</h1>
            <button className='demo-login-button' onClick={this.demoLogin}>Demo Login</button>
            <div className='or-separator'>
              or
            </div>
          </div>
          <form className='login-form' onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className='login-input'>
              <label>Email Address
                <br/>
                <input
                  className='login-input-field'
                  type='text'
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
            </div>
            <br />
            <div className='login-input'>
              <label>Password
                <br/>
                <input
                  className='login-input-field'
                  type='password'
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
            </div>
            <br />
            <div className='login-button-container'>
              <input className='login-button' type='submit' value={this.props.formType} />
            </div>
          </form>
        </div>
        <div className='login-signup-link'>
          <div>Don't have an account?</div>
          <button className='login-signup-button' onClick={this.navigateToSignup}>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default LoginForm;