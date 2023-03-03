import style from './appStyles.module.css';


function App() {
  const heading = {
    color : 'red',
    fontSize : '50px'
  }
  return (
    <div id="main">
    <h1 className={style.success} >Success</h1>
    <h1 id='error' style = {heading}>Error</h1>
  </div>
  );
}

export default App;
