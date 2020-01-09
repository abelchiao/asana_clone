import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, CLEAR_ERRORS } from '../../actions/session_actions';

const mapStateToProps = state => ({
  formType: 'Log In',
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch( {type: CLEAR_ERRORS} )
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);