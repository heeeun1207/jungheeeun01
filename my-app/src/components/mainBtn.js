import React, { useContext } from 'react';
import { BtnContext } from './btnContext';

const MainBtn = () => {
  const Contextdata = useContext(BtnContext);

  return (
    <div>
      {Contextdata.map((data, index) => {
        let Name = data.name;
        let Value = data.value;
        let Image = data.image;

        return (
          <div key={index}>
            {/* <p>Name: {Name}</p>
            <p>Value: {Value}</p> */}
            <img src={Image} alt={Name} />
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
