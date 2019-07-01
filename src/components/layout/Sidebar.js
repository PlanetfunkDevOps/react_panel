import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Fragment>
      <Link to='client/add' className='btn btn-success btn-block'>
        <i className='fa fa-plus' /> New
      </Link>
    </Fragment>
  );
}
