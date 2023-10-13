import './App.css'
import './css/bootstrap.css'
import Home from './components/Home'
import Bars from './components/Bars'
import Forms from './components/Forms'
import Sides from './components/Sides'
function App() {
  return (
    <>
      <div className="container-fluid">
        <Home/>
        <Bars/>
        <Sides/>
        <Forms/>
      </div>  
    </>
  );
}

export default App;
