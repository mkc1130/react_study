import React from 'react';
import '../styles/result.css';
import {useLocation} from 'react-router-dom';

function Result() {
  const location = useLocation();
  console.log(location);
  return (
    <div>ID : {location.state.id}<br />
         PW : {location.state.pw}</div>
  );
}



export default Result;
