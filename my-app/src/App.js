// import logo from './logo.svg';
import './App.css';


function Header(props) {
  console.log('porps', props, props.title);

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
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ]
  return (
    <div>
      <Header title="REACT" onChangeMod={function () {
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;
