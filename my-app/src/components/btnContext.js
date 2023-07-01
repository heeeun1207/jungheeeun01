import { createContext } from 'react';
import '../components/images/gasStationbutton.png'
import '../components/images/localConvenience.png'
import '../components/images/restroom.png'

export const BtnContext = createContext([
  //? createContext 함수를 사용하여 생성한 컨텍스트 객체를 다른 컴포넌트에서 import하여 사용할 수 있다.
  {
    value: '편의점',
    image: 'localConvenience.png',
    name: '편의점',
  },
  {
    value: '카페',
    image: 'restroom.png',
    name: '카페',
  },
  {
    value: '주유소',
    image: 'gasStationbutton.png',
    name: '주유소',
  },
]);
