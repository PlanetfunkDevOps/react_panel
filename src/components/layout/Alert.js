import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Alert = props => {
  Alert.propTypes = {
    message: PropTypes.string.isRequired,
    messageTypes: PropTypes.string.isRequired
  };

  const { message, messageType } = props;

  return (
    <Fragment>
      <div
        className={classnames('alert', {
          'alert-success': messageType === 'success',
          'alert-danger': messageType === 'error'
        })}
      >
        {message}
      </div>
    </Fragment>
  );
};

export default Alert;
