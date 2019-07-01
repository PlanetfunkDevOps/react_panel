import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Alert from '../layout/Alert';
import { notifyUser } from '../../actions/notifyActions';

export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  static propTypes = {
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase
      .login({ email, password })
      .catch(err => notifyUser('Invalid login credentials', 'error'));
  };

  render() {
    const { email, password } = this.state;
    const { message, messageType } = this.props.notify;

    return (
      <Fragment>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='card'>
              <div className='card-body'>
                {message ? (
                  <Alert message={message} messageType={messageType} />
                ) : null}
                <h1 className='text-center pb-4 pt-3'>
                  <span className='text-primary'>
                    <i className='fas fa-lock' /> Login
                  </span>
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      className='form-control'
                      name='email'
                      value={email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      value={password}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  notify: state.notify
});

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    { notifyUser }
  )
)(Login);
