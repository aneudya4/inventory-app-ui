import React, { useState } from 'react';
import Menu from '../menu/Menu';
import DashboardNav from '../dashboardNav/DashboardNav';
const DashboardOptions = ({ match }) => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = (bool) => {
    setShowNav(bool);
  };
  return (
    <>
      <Menu handleClick={handleShowNav} showNav={showNav} />

      <DashboardNav handleClick={handleShowNav} showNav={showNav} />
    </>
  );
};
export default DashboardOptions;
