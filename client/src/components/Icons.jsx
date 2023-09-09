import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const MyIconComponent = () => {

  const pad = {
    marginTop: '10px'
  }

  return (
    <div>
      <FaStar size={50} color="yellow" />
    </div>
  );
};

export default MyIconComponent;