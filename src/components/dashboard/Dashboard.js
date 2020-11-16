import React from 'react';
import { Route } from 'react-router-dom';
import Overview from '../overview/Overview';
import DashboardOptions from '../dashboardOptions/DashboardOptions';
import './dashboard.css';

const Dashboard = (props) => {
  return (
    <div className='dashboard'>
      <Route path={`${props.match.path}`} component={DashboardOptions} />
      <Route path={`${props.match.path}/overview`} component={Overview} />
    </div>
  );
};

export default Dashboard;
