import React, { useContext } from 'react';
import app from '../../firebaseConfig';
import { AuthContext } from '../auth/Auth';
const HomePage = () => {
  const data = useContext(AuthContext);

  return (
    <div>
      <span>Mgg</span>
    </div>
  );
};
export default HomePage;
