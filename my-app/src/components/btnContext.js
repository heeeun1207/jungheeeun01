import { createContext } from 'react';

export const BtnContext = createContext([
  //? createContext 함수를 사용하여 생성한 컨텍스트 객체를 다른 컴포넌트에서 import하여 사용할 수 있다.
  {
    value: '편의점',
    image: 'convenience-store.jpg',
    name: '편의점',
  },
  {
    value: '카페',
    image: 'cafe.jpg',
    name: '카페',
  },
  {
    value: '주유소',
    image: 'gas-station.jpg',
    name: '주유소',
  },
]);
