import React, { useState, useCallback } from 'react';
import Menu from '../menu/Menu';
import DashboardNav from '../dashboardNav/DashboardNav';
const DashboardOptions = ({ match }) => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = useCallback(
    (bool) => {
      setShowNav(bool);
    },
    [setShowNav]
  );
  return (
    <>
      <Menu handleShowNav={handleShowNav} showNav={showNav} />

      <DashboardNav handleClick={handleShowNav} showNav={showNav} />
    </>
  );
};
export default DashboardOptions;
