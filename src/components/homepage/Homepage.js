import React, { useContext } from 'react';
import app from '../../firebaseConfig';
import apiCoptext from '../../apiContext';
const HomePage = () => {
  const { user } = useContext(apiCoptext);

  return (
    <div>
      <span>Mgg</span>
    </div>
  );
};
export default HomePage;
