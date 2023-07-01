import React from "react";
//리액트에서 제공하는 기본적인 함수 
import { useState } from "react";

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) {
  return <header>
    {/* a태그를 클릭했을때 함수가 호출된다 */}
    <h1><a href='/' onClick={function (event) {
      // 기본 동작이 작동되지 않도록 막는다.
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>

      {/* t.body  */}
      <a id={t.body} href={'/read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  // 상수 모드의 값이 무엇이냐에 따라서 본문의 값이 달라지게 하기 
  // const _mode = useState('WELCOME');
  // const mode = _mode[1];
  // console.log('_mode', _mode);
  const [mode, setMode] = useState('WELCOME');
  const topics = [
    { id: 1, title: '콜라', body: '콜라는...' },
    { id: 2, title: '사이다', body: '사이다는...' },
    { id: 3, title: '환타', body: '환타는...' },
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === "READ") {
    content = <Article title="Read" body="Read"></Article>
  }
  return (
    <div>
      {/* header 컴포넌트에 이벤트 넣기 */}
      <Header title="안녕하세요 헤더입니다." onChangeMode={function () {
        setMode("WELCOME");
      }}>
      </Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode("READ");
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
