import './App.css';
import Router from './routes/Router';
import NavSuperior from './components/commom/NavSuperior';

function App() {
  return (
    <div className="App">
      <NavSuperior/>
      <Router/>
    </div>
  );
}

export default App;
