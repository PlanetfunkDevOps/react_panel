import React, { Fragment } from 'react';

import Sidebar from '../layout/Sidebar';
import Clients from '../clients/Clients';

export default function Dashboard() {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-10'>
          <Clients />
        </div>
        <div className='col-md-2'>
          <Sidebar />
        </div>
      </div>
    </Fragment>
  );
}
