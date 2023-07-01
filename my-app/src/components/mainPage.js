import React, { useState } from 'react';
// import MyInfo from '../common/myInfo';
// import Search from '../common/Search';
// import Listdiv from '../services/Listdiv';
import MainBtn from './mainBtn';

const Mainpage = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (


    <div>
      <MainBtn />
    </div>

  );
};

export default Mainpage;
