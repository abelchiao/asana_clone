import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login, CLEAR_ERRORS } from '../../actions/session_actions';

const mapStateToProps = state => ({
  formType: 'Sign Up',
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch({ type: CLEAR_ERRORS })
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);