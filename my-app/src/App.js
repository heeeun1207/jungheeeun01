// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//useState _mode 값의 0번째 원소는 WELCOME 1번째 원소는 함수이다.
//useState 는 배열을 리턴하고, 배열의 0번째 값은 상태의 값을 읽을때 사용한다.
//1번째 데이터는 그 상태의 값을 변경할때 사용하는 함수이다. 

function Header(props) {

  return <header>
    <h1><a href='/' onClick={function (event) {
      event.preventDefault(); // a태그의 동작을 방지한다-> 리로드가 안됨.
      props.onChangeMod(); //함수 호출 -> Header를 클릭했을때 이벤트를 적용한다.
    }}>{props.title}</a></h1>
  </header>
}


function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
        event.preventDefault();
        props.onChangeMod(event.target.id);
      }}>{t.title}</a>
    </li>)    //목록안에서 링크를 설치해서 그 링크가 이벤트를 호출할때 입력값을 준다. 
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}


function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}


function App() {
  // const _mode = useState('WELCOME'); //mode 지역변수를 상태로 업그레이드하기 
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    content = <Article title="READ" body="Hello, READ"></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMod={() => {
        setMode('WELCOME');
      }}></Header>


      <Nav topics={topics} onChangeMod={(id) => {
        setMode('READ');
      }}></Nav>
      {content}
    </div >
  );
}

export default App;
